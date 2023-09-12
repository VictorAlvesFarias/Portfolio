import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set('x-url', request.nextUrl.pathname.split("/")[1]);

  return (
    NextResponse.next({
      request: {
        // Apply new request headers
        headers: requestHeaders,
      }
    })
  )
}
 
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
