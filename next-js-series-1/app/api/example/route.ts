import { NextResponse } from "next/server";


export async function GET(){
    const users = [
        {id:1 , name: 'John Doe'},
        {id:2 , name: 'Jane Doe'}
    ]

    return NextResponse.json(users)
}

export async function POST(req:Request) {
    const body = await req.json();

    return NextResponse.json({
        message:"User created",
        user: body},
        {status: 201}
    )
}