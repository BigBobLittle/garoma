const express =  require("express");
const {body} =  require("express-validator");
const { createUser , getUsers ,getUser  , ScheduleMeeting, getMeeting} = require("../controller");
const User= require("../models/User");
const {reqValidator}  =  require("../middlewares/reqValidation");
const router = express.Router();

router.use(express.json());

router.route("/user")
.get(getUsers) 
.post([body("username").notEmpty().trim().custom((value ,{req})=>{
    return User.findOne({username:value}).then(user=>{
        console.log(user);
        if(user){
            return Promise.reject("Username already exists");
        }
    })
})],reqValidator , createUser);


router.route("/user/:id")
.get(getUser);


router.route("/meeting")
.post(ScheduleMeeting);

router.route("/meeting/:id")
.get(getMeeting);


module.exports=  router ;