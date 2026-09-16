import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";
import Users from "@/models/userModel";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email } = reqBody;

        console.log(reqBody);

        // Check email
        if (!email) {
            return NextResponse.json(
                {
                    error: "Email is required",
                    success: false,
                },
                {
                    status: 400,
                }
            );
        }

        // Find user
        const user = await Users.findOne({ email });

        console.log(user);

        if (!user) {
            return NextResponse.json(
                {
                    error: "The user does not exist",
                    success: false,
                },
                {
                    status: 401,
                }
            );
        }

        // Send reset password email
        await sendEmail({
            email,
            emailType: "RESET",
            userId: user._id,
        });

        return NextResponse.json(
            {
                message: "Password reset email sent successfully",
                success: true,
            },
            {
                status: 200,
            }
        );

    } catch (error: any) {
        console.log("Forgot Password API ERROR:", error);

        return NextResponse.json(
            {
                message: error.message || "Reset password failed",
                success: false,
            },
            {
                status: 500,
            }
        );
    }
}