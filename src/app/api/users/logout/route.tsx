import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response = NextResponse.json({message: "Logout", status: 200, success: true});
        response.cookies.set("token", "", {
        httpOnly: true,
        expires: new Date(0)
    })
    return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Logout Fail", status: 400, success: false});
    }
}