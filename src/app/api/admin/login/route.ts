import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const ok =
    body.email === process.env.ADMIN_EMAIL &&
    body.password === process.env.ADMIN_PASSWORD;

  if (!ok) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("siso_admin", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    // secure: true, // enable on production (https)
  });

  return res;
}