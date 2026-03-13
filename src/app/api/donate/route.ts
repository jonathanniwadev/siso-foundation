// src/app/api/donate/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic validation
    const amount = Number(body.amount);
    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        { ok: false, error: "Invalid amount" },
        { status: 400 }
      );
    }

    const currency = String(body.currency || "").toUpperCase().trim();
    if (!currency) {
      return NextResponse.json(
        { ok: false, error: "Currency is required" },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      return NextResponse.json(
        { ok: false, error: "Missing server environment variables" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, serviceKey);

    const reference =
      "SISO_" + Date.now() + "_" + Math.random().toString(16).slice(2);

    const { data, error } = await supabase
      .from("donations")
      .insert([
        {
          name: body.name ?? null,
          email: body.email ?? null,
          phone: body.phone ?? null,
          amount,
          currency,
          message: body.message ?? null,
          status: "pending",
          payment_provider: "flutterwave",
          reference,
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true, donation: data, reference });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Server error" },
      { status: 500 }
    );
  }
}