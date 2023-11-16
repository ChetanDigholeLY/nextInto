import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel';
import bycryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json();

        const { username, email, password } = reqBody

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: 'user exist already' }, { status: 400 })
        }

        const salt = await bycryptjs.genSalt(10)
        const hashedPassword = await bycryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const saveUser = await newUser.save();

        return NextResponse.json({
            message: 'user created',
            success: true,
            saveUser
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}
