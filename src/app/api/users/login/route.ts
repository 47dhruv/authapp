import { connect } from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import Users from "@/models/userModel"
import jwt from "jsonwebtoken"

connect()

export  async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        console.log(reqBody)
        const user = await Users.findOne({ email })
        console.log(user)
        if (!user) {
            return NextResponse.json({ error: "the user does not exist" }, {
                status: 401,
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return NextResponse.json({ error: "password is incorrect" }, {
                status: 401,
            })
        }

        const tokenData = {
            id: user._id,
            email: user.email,
            username: user.username,
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1h" })

        const response = NextResponse.json({
            messages: "login succesfull",
            success: true,
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })
       console.log(response)
        return response
    } catch (error: any) {
        console.log("LOGIN API ERROR:", error);

    return NextResponse.json(
        {
            message: error.message || "Login failed",
        },
        {
            status: 500,
        }
    );

    }
}