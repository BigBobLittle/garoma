const Meeting = require("../models/Meeting");
const { findById } = require("../models/User");
const User = require("../models/User");

exports.getUsers=async(req ,res)=>{

const users = await User.find() ;


res.status(200).send(users);


};


exports.createUser =async (req ,res)=>{

    const {username} =  req.body;

    const user = new User({
        username ,
        meetings:[]
    });
await user.save();
    res.status(201).send(user);


};


exports.getUser = async(req ,res)=>{

   
    const user =  await User.findById(req.params.id).populate("meetings");

    if(!user){
        const error =  new Error("User not found");
        error.statusCode =  403 ;
        throw error ;
    }

    res.status(200).send(user);
}

exports.ScheduleMeeting =async(req ,res)=>{

    const {title ,  scheduler , member  ,  DateandTime}= req.body ; 

    const  meetingMember  =  await User.findById(member)  ; 
const meetingScheduler =  await User.findById(scheduler);
    if(!meetingMember){
        const error =  new Error("member not found");
        error.statusCode =  403 ;
        throw error ;
    }

    console.log(meetingMember);
 
    const date =  Date.now();
    const meeting  =  new Meeting({
        title , scheduler , member , DateandTime:date
    }) 
    
    await meeting.save();
    console.log(meetingMember);
 meetingMember.meetings.push(meeting);
 meetingScheduler.meetings.push(meeting);

 await meetingMember.save();
 await meetingScheduler.save();



res.status(201).send(meeting);



}