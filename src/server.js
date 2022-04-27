const  app = require("./app");
const mongoose =  require("mongoose");
const  Port =  8080 || process.env.Port;
require("dotenv").config();

const start = async()=>{

   
    try{
        if(!process.env.MONGO_URI){
            throw new Error("Mongo uri not found");
            }

            
        const connect = await mongoose.connect("mongodb://localhost:27017/Meetings");
        console.log(connect.connection.host);
    }catch(err){
        console.log(err);
    }

    app.listen(Port , ()=>{
        console.log(`server opened at http://localhost:${Port}`);
    });

};

start();