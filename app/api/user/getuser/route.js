
import ConnectDB from "@/db/connectdb";
import User from "@/models/data";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

ConnectDB()

export async function GET() {
    try { 
        const tokendata = cookies().get('token')?.value || ""       
        const decodeToken = jwt.verify(tokendata,process.env.Jwt_key)
        const userData = await User.findOne({email:decodeToken.user}).select("-password")
      console.log(userData);
    
        return NextResponse.json({message:"user found", userData}, {status:200})

    } catch (error) {
        return NextResponse.json({error:error.message}, {status:400})
    }
}