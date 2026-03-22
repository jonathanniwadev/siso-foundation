import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyFlutterwaveTransaction } from "@/lib/flutterwave";

export async function POST(req: NextRequest) {
  try {
    const secretHash = process.env.FLUTTERWAVE_WEBHOOK_SECRET_HASH;
    const signature = req.headers.get("verif-hash");

    if (!secretHash || signature !== secretHash) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const payload = await req.json();

    const eventData = payload?.data;
    const transactionId = eventData?.id;
    const txRef = eventData?.tx_ref;

    if (!transactionId || !txRef) {
      return NextResponse.json({ ok: false, error: "Invalid webhook payload" }, { status: 400 });
    }

    const verified = await verifyFlutterwaveTransaction(String(transactionId));

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      throw new Error("Missing Supabase server env");
    }

    const supabase = createClient(supabaseUrl, serviceKey);

    const { data: donation, error: donationError } = await supabase
      .from("donations")
      .select("amount, currency, reference")
      .eq("reference", txRef)
      .single();

    if (donationError || !donation) {
      return NextResponse.json({ ok: false, error: "Donation not found" }, { status: 404 });
    }

    let finalStatus = "failed";

    if (
      verified.tx_ref === txRef &&
      Number(verified.amount) === Number(donation.amount) &&
      String(verified.currency).toUpperCase() ===
        String(donation.currency).toUpperCase() &&
      verified.status === "successful"
    ) {
      finalStatus = "completed";
    } else if (verified.status === "cancelled") {
      finalStatus = "cancelled";
    } else if (verified.status === "failed") {
      finalStatus = "failed";
    } else {
      finalStatus = "pending";
    }

    const { error: updateError } = await supabase
      .from("donations")
      .update({
        status: finalStatus,
        payment_provider: "flutterwave",
      })
      .eq("reference", txRef);

    if (updateError) {
      throw updateError;
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Webhook error" },
      { status: 500 },
    );
  }
}