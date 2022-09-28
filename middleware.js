import { NextResponse } from "next/server";

export function middleware({ nextUrl: { pathname } }) {
  if (pathname === "/pages/test/") {
    return NextResponse.rewrite("https://example.com/");
  }
}
