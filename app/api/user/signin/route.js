import ConnectDB from "@/db/connectdb";
import User from "@/models/data";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(NextRequest) {

   try {
   ConnectDB()
    const req = await NextRequest.json()
    const {username,email,password,phoneNum,photo,access} = req;
    console.log(req);
 
    //find existed user 
    const userExist = await User.findOne({email})

    if(userExist) {
        console.log("user Already Exist");
        return NextResponse.json({message:"user Already Exist",status:200}, {status:200})
    }
    const saltRound = await bcrypt.genSalt(10);
    const hash_password  = await bcrypt.hash(password,saltRound)


    const newuser = {username,email,password:hash_password,phoneNum,photo,access}
    console.log(newuser);

    const user = await User.create(newuser)
    console.log(user);

    return NextResponse.json({message:"user has been created",status:200},{status:200})
    
   } catch (error) {
    console.log("failed to create user");
    return NextResponse.json({error:error.message},
        {status:400})
   }

}