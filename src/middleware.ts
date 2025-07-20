import {NextRequest, NextResponse} from "next/server";


export  function middleware(request: NextRequest) {
    const accessToken = request.cookies.has("access-token");
    const {pathname} = request.nextUrl;
    if (pathname.startsWith('/dashboard')) {
        if (accessToken) {
            return NextResponse.next();
        }
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
        if (accessToken) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
        return NextResponse.next();
    }
    return NextResponse.next()
}


export const config = {
    matcher : ["/login" , "/register", "/dashboard/:path*"],
}