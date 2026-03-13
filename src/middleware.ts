import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect everything under /admin except the login page itself
  const isAdminRoute = pathname.startsWith("/admin");
  const isAdminLogin = pathname === "/admin";

  if (!isAdminRoute || isAdminLogin) {
    return NextResponse.next();
  }

  // Check cookie set after login
  const admin = req.cookies.get("siso_admin")?.value;

  if (admin !== "1") {
    const url = req.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};