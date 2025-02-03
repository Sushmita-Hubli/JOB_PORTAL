import mongoose from "mongoose";

export const connection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "JOB_PORTAL"
    }).then(()=>{
        console.log("connected to database");
    }).catch(err=>{
        console.log(`error in connection with database: ${err}`);
    })
}