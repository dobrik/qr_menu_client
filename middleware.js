import {NextResponse} from 'next/server';

function getSubdomain(hostname) {
  const parts = hostname.split('.');
  if (parts.length < 3) return null;
  return parts[0];
}

export function middleware(request) {
  const {pathname} = request.nextUrl;

  if (pathname === '/api/health') {
    return NextResponse.next();
  }

  // Skip static files and images to let them load normally
  if (
    pathname.startsWith('/_next/static') ||  // next.js internal static
    pathname.startsWith('/_next/image') ||   // next.js image optimizer
    pathname === '/favicon.ico' ||            // favicon
    pathname.startsWith('/img/')
  ) {
    return NextResponse.next();
  }

  const host = request.headers.get('host') || '';
  let subdomain = getSubdomain(host);

  const response = NextResponse.next();

  if (subdomain) {
    response.headers.set('x-restaurant', subdomain);
  } else {
    if (pathname !== '/landing') {
      return NextResponse.redirect(new URL('/landing', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: '/:path*',
};