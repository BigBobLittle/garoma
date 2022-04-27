const mongoose  = require("mongoose");
const Schema = mongoose.Schema; 

const meetingSchema =  {
    type:Schema.Types.ObjectId,
    ref:"Meeting"
}

const userSchema =  new Schema({


    username:{
        type:String ,
        required:true,
        unique:true
    }
     ,
     meetings:[meetingSchema]
});



const User =  mongoose.model("User" , userSchema);
module.exports  =  User;