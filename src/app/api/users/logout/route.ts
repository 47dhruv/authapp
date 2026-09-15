import { NextResponse } from "next/server";


export async function GET() {
    
try {
  const  response = NextResponse.json({
        message:"logout succesfully",
        succes:true
    })

    response.cookies.set("token","",
        {
            httpOnly:true,
            expires:new Date(0)
        })

        return response
    
} catch (error:any) {
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