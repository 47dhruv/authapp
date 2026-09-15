import { getTokenData } from "@/helpers/getTokenData";

import { NextRequest, NextResponse } from "next/server";

import Users from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect()
export async function GET(request: NextRequest) {
    try {
        const userID = await getTokenData(request)
        if (!userID) {
            throw Error("userId not avilable")
        }
        const user = await Users.findOne({ _id: userID }).select("-password");
        if (!user) {
            return NextResponse.json(
                {
                    message: "User not found",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json({
            message: "user found",
            data: user
        })


    } catch (error: any) {
        console.log("ME API ERROR:", error);

        return NextResponse.json(
            {
                message: error.message || "Data fetching failed in ME API",
            },
            {
                status: 500,
            }
        );
    }
}