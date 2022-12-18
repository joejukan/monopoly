import { IncomingMessage, ServerResponse } from 'http';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const { method } = req;

  if (pathname.startsWith('/images')) {
    const url = new URL('/api' + pathname, req.url);
    const res = await fetch(url.href);
    return res;
  }
}

export const config = {
  matcher: '/:path*'
};
