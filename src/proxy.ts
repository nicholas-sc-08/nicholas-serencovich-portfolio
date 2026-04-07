import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isFile = /\..*$/.test(pathname);

  const pathnameIsMissingLocale = ['/en', '/pt'].every(
    (locale) => !pathname.startsWith(`${locale}/`) && pathname != locale
  );

  if (pathnameIsMissingLocale && !isFile) {
    const locale = "pt";
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};