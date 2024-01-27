import mongoose from "mongoose";
import { NextResponse } from "next/server";

const ConnectDB = async () =>{
 try {
    await mongoose.connect(process.env.Mongo_URI)
    return NextResponse.json({message:"mongodb is connected"})
    
 } catch (error) {
    return NextResponse.json({error: error.message}, 
        {status:400}, 
        {message:"failed to connect mongodb"})
 }
}

export default ConnectDB;