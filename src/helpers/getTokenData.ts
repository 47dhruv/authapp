import { NextRequest,NextResponse } from "next/server";
import Jwt  from "jsonwebtoken";

export function getTokenData (request:NextRequest){
try {
    const token = request.cookies.get("token")?.value||""
    const decodeToken:any= Jwt.verify(token,process.env.TOKEN_SECRET!)
 return decodeToken.id;

    
} catch (error :any) {
     console.log("Data not Fetch:", error);
    
        return NextResponse.json(
            {
                message: error.message || "Data not Fetched",
            },
            {
                status: 500,
            }
        );
}


}

