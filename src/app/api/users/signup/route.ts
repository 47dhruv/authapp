import {connect} from "@/dbConfig/dbConfig"
import { NextRequest,NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import Users from "@/models/userModel"


connect()

export async function POST(request:NextRequest) {
    try {
        const reqBody=await request.json()
        const {email,username,password}=reqBody
        console.log(reqBody)
        
            
      const user= await Users.findOne({email})
        if (user) {
            return NextResponse.json({error:"user already exist"},
                {status:400}
            )
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)


        const newuser= new Users({
            email:email,
            password:hashedPassword,
            username:username
        })

      const savedUser=  await newuser.save();
      console.log(savedUser);
      return NextResponse.json(
        {message:"user create succesfully",
            success:true,
            savedUser
        },
        {status:201}
      )

    } catch (error:any) {
        return  NextResponse.json({error:error.messages},{
            status:500
        })
    }
}