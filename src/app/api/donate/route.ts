import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createFlutterwavePaymentLink } from "@/lib/flutterwave";

const ALLOWED_CURRENCIES = new Set(["UGX", "USD", "KES", "EUR", "GBP"]);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const amount = Number(body.amount);
    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        { ok: false, error: "Invalid amount" },
        { status: 400 },
      );
    }

    const currency = String(body.currency || "").toUpperCase().trim();
    if (!ALLOWED_CURRENCIES.has(currency)) {
      return NextResponse.json(
        { ok: false, error: "Unsupported currency" },
        { status: 400 },
      );
    }

    const name = body.name?.trim() || null;
    const email = body.email?.trim() || null;
    const phone = body.phone?.trim() || null;
    const message = body.message?.trim() || null;

    if (!email && !phone) {
      return NextResponse.json(
        { ok: false, error: "Please provide at least email or phone." },
        { status: 400 },
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      return NextResponse.json(
        { ok: false, error: "Missing server environment variables" },
        { status: 500 },
      );
    }

    const supabase = createClient(supabaseUrl, serviceKey);

    const reference =
      "SISO_" + Date.now() + "_" + Math.random().toString(16).slice(2, 12);

    const { error: insertError } = await supabase.from("donations").insert([
      {
        name,
        email,
        phone,
        amount,
        currency,
        message,
        status: "pending",
        payment_provider: "flutterwave",
        reference,
      },
    ]);

    if (insertError) {
      return NextResponse.json(
        { ok: false, error: insertError.message },
        { status: 400 },
      );
    }

    const payment = await createFlutterwavePaymentLink({
      tx_ref: reference,
      amount,
      currency,
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json({
      ok: true,
      reference,
      payment_url: payment.payment_link,
    });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Server error" },
      { status: 500 },
    );
  }
}