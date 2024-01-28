import { NextResponse } from "next/server";

 
// This function can be marked `async` if using `await` inside
export function middleware(NextRequest) {
const path = NextRequest.nextUrl.pathname;

const ispublic = path === "/login" || path === "/signup";

 const Token = NextRequest.cookies.get("token")?.value || "";
 console.log(path);

 if(ispublic && Token)
 {
    return NextResponse.redirect(new URL("/", NextRequest.nextUrl))
 }

 if(!ispublic && !Token)
 {
    return NextResponse.redirect(new URL("/login", NextRequest.nextUrl))
 }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
   "/",
   "/dashboard",
   "/dashboard/social",
   "/login",
   "/signup"
]}