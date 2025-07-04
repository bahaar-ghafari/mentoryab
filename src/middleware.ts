import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['fa', 'en'];
const defaultLocale = 'fa';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // اجازه به فایل‌های public مثل images, .js, .css
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    pathname.includes('_next')
  ) {
    return NextResponse.next();
  }

  // اگر آدرس شامل زبان بود، ادامه بده
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // تشخیص زبان مرورگر
  const acceptLang = req.headers.get('accept-language');
  const preferredLang = acceptLang?.split(',')[0].split('-')[0];
  const detectedLang = locales.includes(preferredLang || '')
    ? preferredLang
    : defaultLocale;

  // ریدایرکت به زبان مناسب
  return NextResponse.redirect(new URL(`/${detectedLang}${pathname}`, req.url));
}

export const config = {
  matcher: [
   
    '/((?!_next/static|_next/image|favicon.ico|locales|.*\\..*).*)',
  ],
};
