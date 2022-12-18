import { ServerResponse } from 'http';
import {} from 'next/dynamic';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const { method } = req;

  if (pathname.startsWith('/images')) {
    //console.info(method, pathname);
    const url = new URL('/api' + pathname, req.url);
    const fetched = await fetch(url.href, { headers: req.headers });
    const res = new NextResponse(fetched.body, { url: req.url, headers: fetched.headers });
    return res;
  }
}

export const config = {
  matcher: '/:path*'
};
