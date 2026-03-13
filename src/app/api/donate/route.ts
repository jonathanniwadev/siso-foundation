import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createPesapalOrder } from "@/lib/pesapal";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const amount = Number(body.amount);

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { ok: false, error: "Invalid amount" },
        { status: 400 }
      );
    }

    const currency = String(body.currency || "").toUpperCase();

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const reference =
      "SISO_" + Date.now() + "_" + Math.random().toString(16).slice(2);

    const { error } = await supabase.from("donations").insert([
      {
        name: body.name ?? null,
        email: body.email ?? null,
        phone: body.phone ?? null,
        amount,
        currency,
        message: body.message ?? null,
        status: "pending",
        payment_provider: "pesapal",
        reference,
      },
    ]);

    if (error) {
      return NextResponse.json({ ok: false, error: error.message });
    }

    const order = await createPesapalOrder({
      reference,
      amount,
      currency,
      name: body.name,
      email: body.email,
      phone: body.phone,
    });

    return NextResponse.json({
      ok: true,
      reference,
      payment_url: order.redirect_url,
      order_tracking_id: order.order_tracking_id,
    });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e.message || "Server error" },
      { status: 500 }
    );
  }
}