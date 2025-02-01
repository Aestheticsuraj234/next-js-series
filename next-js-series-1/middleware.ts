import { NextRequest, NextResponse } from "next/server";


// *1. Cookies
// export function middleware(request:NextRequest){
// // const lang = request.cookies.get("lang");

// // if(!lang){
// //     const response = NextResponse.next();

// //     response.cookies.set("lang" , "eng-US");
// //     return response;
// // }

// // return NextResponse.next();
// }

// *2. Headers
// export function middleware(request:NextRequest){
//     const response = NextResponse.next();

//     response.headers.set("custom-header" , "HelloNEXTJS");

//     return response;
// }


// *3 Redirection
export function middleware(request:NextRequest){
    return NextResponse.redirect(new URL("/login" , request.url))
}

export const config = {
    matcher:"/users"
}