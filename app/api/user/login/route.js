import ConnectDB from "@/db/connectdb";
import User from "@/models/data";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";
 
ConnectDB();
export async function POST(NextRequest) {
    try {
        const req = await NextRequest.json()
        const {email,password} =req;
        console.log(req);
        const user= await User.findOne({email})
        console.log("user matched",user);

        if(!user){
           
            return NextResponse.json({message:"User Doesn't Exist", status:400}, {status:400})
        }
        const hash_password = await bcrypt.compare(password, user.password)
    
        if(hash_password == true){
            
           const token = jwt.sign({user:user?.email, password:user?.password,access:user?.access},process.env.Jwt_key)

            console.log("Login Successfull",token);
            
            const response =  NextResponse.json({message:"Loging Successfull", status:200,user}, {status:200},)

            response.cookies.set("token",token,{httpOnly: true, })

            return response;
        }
        
    } catch (error) {
        return NextResponse.json({message:"Loging Failed", status:400}, {status:400})
    }
}