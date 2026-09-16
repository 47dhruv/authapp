import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import Users from "@/models/userModel";

connect();
export async function POST(request :NextRequest) {
    try {
        const reqBody= await request.json()
        const {token}=reqBody
        console.log(token)
        if (!token) {
            throw new Error("token not found")
        }
      const user=  await Users.findOne({
            verifyToken:token,
            verifyTokenExpiry:{$gt:Date.now()}
        })
        if(!user){
        return NextResponse.json({error:"Invalid Token"},{status:400})

        }

        console.log(user)

        user.isVerified=true,
        user.verifyToken=undefined;
        user.verifyTokenExpiry=undefined;
        await user.save()

        return NextResponse.json({
            message:"Email Verified Succesfully",
            success :true
        })

    } catch (error:any) {
         console.log("Verify Email API Error", error);

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