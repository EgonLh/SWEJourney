import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    console.log("Middleware" , request.nextUrl.pathname);
    if(request.nextUrl.href.endsWith("?auth=true"))
    {
        return NextResponse.next();
    }else{
        return NextResponse.redirect(new URL('/login',request.url));
    }
}
export const config = {
    matcher: ['/admin'],
}