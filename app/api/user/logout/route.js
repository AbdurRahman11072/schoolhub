import { NextResponse } from "next/server";



export async function GET(){
    try {
        console.log("request has been made");
        const response = NextResponse.json({message:"token has been clear", status:200})
        response.cookies.delete("token")
        
        return response
        
    } catch (error) {
        return NextResponse.json({error:error.message, status:400})
    }
}