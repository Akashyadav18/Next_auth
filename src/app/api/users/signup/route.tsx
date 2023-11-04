import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels"
import bcrypt from "bcryptjs"

connect();

export async function POST(req: NextRequest){
    try {
        const {username, email, password} = await req.json();

        // Check if the user already exists
        const checkUser = await User.findOne({email});
        if(checkUser) {
            return NextResponse.json({message: "User already exists", status: 400})
        }

        // hashed password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create a new user
        const user = new User({
            username,
            email,
            password: hashedPassword,
        })

        const savedUser = await user.save();

        return NextResponse.json({savedUser, message: "Signup successful", success: true ,status: 201,});

    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Fail to Sign Up", success: false, status: 500})
        
    }
}