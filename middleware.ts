import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = createMiddleware({
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localePrefix: 'always',
  })(request)

  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
