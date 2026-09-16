import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Users from "@/models/userModel";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { token, password } = reqBody;

    console.log("TOKEN:", token);

    // Check token
    if (!token) {
      throw new Error("Token not found");
    }

    // Check password
    if (!password) {
      throw new Error("Password not found");
    }

    // Find user using reset token
    const user = await Users.findOne({
      forgotPasswordToken: token,
      forgotTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "Invalid or expired token",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    console.log("USER:", user);

    // Hash new password
    const hashedPassword = await bcrypt.hash(
      password.toString(),
      10
    );

    // Update password
    user.password = hashedPassword;

    // Remove reset token after successful password change
    user.forgotPasswordToken = undefined;
    user.forgotTokenExpiry = undefined;

    await user.save();

    return NextResponse.json(
      {
        message: "Password changed successfully",
        success: true,
      },
      {
        status: 200,
      }
    );

  } catch (error: any) {
    console.log(
      "Forgot Password API Error:",
      error
    );

    return NextResponse.json(
      {
        message:
          error.message || "Password change failed",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}