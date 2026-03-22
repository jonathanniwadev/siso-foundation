import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyFlutterwaveTransaction } from "@/lib/flutterwave";

function mapStatus(status?: string) {
  switch ((status || "").toLowerCase()) {
    case "successful":
      return "completed";
    case "cancelled":
      return "cancelled";
    case "failed":
      return "failed";
    default:
      return "pending";
  }
}

export async function GET(req: NextRequest) {
  try {
    const txRef = req.nextUrl.searchParams.get("tx_ref");
    const transactionId = req.nextUrl.searchParams.get("transaction_id");
    const redirectStatus = req.nextUrl.searchParams.get("status");

    if (!txRef) {
      return NextResponse.redirect(new URL("/donate?payment=error", req.url));
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      throw new Error("Missing Supabase server env");
    }

    const supabase = createClient(supabaseUrl, serviceKey);

function mapStatus(status?: string | null)

    if (transactionId) {
      const verified = await verifyFlutterwaveTransaction(transactionId);

      const { data: donation } = await supabase
        .from("donations")
        .select("amount, currency")
        .eq("reference", txRef)
        .single();

      if (
        verified.tx_ref === txRef &&
        donation &&
        Number(verified.amount) === Number(donation.amount) &&
        String(verified.currency).toUpperCase() ===
          String(donation.currency).toUpperCase() &&
        verified.status === "successful"
      ) {
        finalStatus = "completed";
      } else {
        finalStatus = "failed";
      }
    }

    await supabase
      .from("donations")
      .update({
        status: finalStatus,
        payment_provider: "flutterwave",
      })
      .eq("reference", txRef);

    return NextResponse.redirect(
      new URL(
        `/donate?payment=${encodeURIComponent(finalStatus)}&reference=${encodeURIComponent(txRef)}`,
        req.url,
      ),
    );
  } catch {
    return NextResponse.redirect(new URL("/donate?payment=error", req.url));
  }
}