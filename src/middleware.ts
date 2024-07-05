import { NextResponse } from "next/server";
import { auth, BASE_PATH } from "@/auth/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
const protectedPaths = ["/admin", "/user", "/settings"];

export default auth((req) => {
  const reqUrl = new URL(req.url);
  if (!req.auth && protectedPaths.includes(reqUrl.pathname)) {
    return NextResponse.redirect(
      new URL(
        `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
          reqUrl?.pathname
        )}`,
        req.url
      )
    );
  }
});
