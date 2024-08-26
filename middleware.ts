import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/') {
    const redirectUrl = '/tyre-dealers-in-india';
    return NextResponse.redirect(new URL(redirectUrl, req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
