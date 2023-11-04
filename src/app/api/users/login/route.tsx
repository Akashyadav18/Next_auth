import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

connect();

export async function POST(req: NextRequest) {
    try {
        const {email, password} = await req.json();
        // check if user exists
        const user = await User.findOne({ email})
        if(!user){
            return NextResponse.json({message: "Invalid Email or Password", status: 400});
        }
        //check if password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({message: "Invalid Password", status:400})
        }
        // create token data
        const tokenData = {
            id: user._id,
            email: user.email,
            password: user.password
        }
        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY!, {expiresIn: "1h"});

        const response = NextResponse.json({message: "Login successful", status: 201, success: true});

        response.cookies.set("token", token, {
            httpOnly: true
        });

        return response;

    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Fail to login", status: 500, success: false});
        
    }
}