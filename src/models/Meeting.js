const mongoose  = require("mongoose");
const Schema = mongoose.Schema; 


const meetingSchema =new Schema
({

     
    title:{
        type:String ,
        required:true
    }
    , 
    scheduler:{
        type:Schema.Types.ObjectId ,
        ref:"User"
    }
     ,

     member:{
         type:Schema.Types.ObjectId ,
         ref:"User"
     } ,

     DateandTime:{
         type:Date ,
         required:true
     }
}) ;


meetingSchema.static.CreateMeeting= (attrs)=>{
  
     return new Meeting(attrs);
};

const Meeting = mongoose.model("Meeting" , meetingSchema);

    module.exports =  Meeting;