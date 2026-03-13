import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getTransactionStatus } from "@/lib/pesapal";

export async function GET(req: NextRequest) {
  const orderTrackingId =
    req.nextUrl.searchParams.get("OrderTrackingId") || "";
  const reference =
    req.nextUrl.searchParams.get("OrderMerchantReference") || "";

  const status = await getTransactionStatus(orderTrackingId);

  const paymentStatus = status.payment_status_description;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  await supabase
    .from("donations")
    .update({
      status: paymentStatus,
    })
    .eq("reference", reference);

  return NextResponse.redirect(
    process.env.NEXT_PUBLIC_SITE_URL +
      "/donate?payment=" +
      paymentStatus +
      "&reference=" +
      reference
  );
}