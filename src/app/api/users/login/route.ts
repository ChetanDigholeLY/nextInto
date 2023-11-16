import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel';
import bycryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

connect()

export async function POST(request: NextRequest) {
    try {

        const requestBody = await request.json();

        const { email, password } = requestBody

        console.log(requestBody);

        const existingUser = await User.findOne({ email })

        if (!existingUser) {
            return NextResponse.json({
                error: 'user does not exist'
            }, { status: 400 })
        }

        const validUser = await bycryptjs.compare(password, existingUser.password)

        if (!validUser) {
            return NextResponse.json({
                error: 'password wrong'
            }, { status: 400 })
        }

        const tokenData = {
            id: existingUser._id,
            userName: existingUser.username,
            email: existingUser.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' })

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,

        })
        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
