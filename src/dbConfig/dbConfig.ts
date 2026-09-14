
import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection
    connection.on("connected",()=>{
        console.log("Mongodb connected succefully")
    })
    connection.on("error",(err)=>{
        console.log("Mongodb not connected succfully. please make sure it connected"+err)
        process.exit(1)
    })
    
  } catch (error) {
    console.log("something went wrong")
    console.error("Error",error)
  }  
}