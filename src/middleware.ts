import { NextRequest, NextResponse } from 'next/server';
import { auth } from "@/auth";

export async function middleware(req: NextRequest) {
  const {nextUrl} = req;
  try {
    const session = await auth();
    // console.log('session:', session);
    // console.log('url:', nextUrl);
    if (nextUrl.pathname.startsWith('/api/auth')) {
      return NextResponse.next();
    }
    if (!session && !['/'].includes(nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/',nextUrl.origin).toString()); 
    }
    if (session && nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/dashboard',nextUrl.origin).toString());
    }
    return NextResponse.next();
  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.error();
  }
}


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};