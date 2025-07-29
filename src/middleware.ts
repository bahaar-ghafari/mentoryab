import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['fa', 'en'];
const defaultLocale = 'fa';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow requests to public files such as images, JavaScript, CSS, etc.
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    pathname.includes('_next')
  ) {
    return NextResponse.next();
  }

  // If the pathname already includes a supported locale, continue without redirect
  if (locales.some(locale => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // Detect browser language from Accept-Language header
  const acceptLang = req.headers.get('accept-language');
  const preferredLang = acceptLang?.split(',')[0].split('-')[0];
  const detectedLang = locales.includes(preferredLang || '')
    ? preferredLang
    : defaultLocale;

  // Redirect to the same path prefixed with the detected language
  return NextResponse.redirect(new URL(`/${detectedLang}${pathname}`, req.url));
}

export const config = {
  matcher: [
    // Exclude static files, public assets, and API routes from middleware processing
    '/((?!_next/static|_next/image|favicon.ico|locales|.*\\..*).*)',
  ],
};
