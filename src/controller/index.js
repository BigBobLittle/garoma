const Meeting = require("../models/Meeting");

const User = require("../models/User");
require("express-async-errors");

exports.getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).send(users);
};

exports.createUser = async (req, res) => {
  const { username } = req.body;

  const user = new User({
    username,
    meetings: [],
  });
  await user.save();
  res.status(201).send(user);
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id).populate("meetings");

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 403;
    throw error;
  }

  res.status(200).send(user);
};

exports.ScheduleMeeting = async (req, res) => {
  const { title, scheduler, member, DateandTime } = req.body;
  const meetingMember = await User.findById(member).populate("meetings");
  const meetingScheduler = await User.findById(scheduler).populate("meetings");
  if (!meetingMember) {
    const error = new Error("member not found");
    error.statusCode = 403;
    throw error;
  }

  console.log(meetingMember);

  const date = new Date(DateandTime);

  const memberNotFree = meetingMember.meetings.find((meeting) => {
    const DateandTime = new Date(meeting.DateandTime);
    return date.getTime() === DateandTime.getTime();
  });
  console.log(memberNotFree, 22);
  if (memberNotFree) {
    const error = new Error("Member is not free");
    error.statusCode = 403;
    throw error;
  }
  const meeting = new Meeting({
    title,
    scheduler,
    member,
    DateandTime: date,
  });

  await meeting.save();

  meetingMember.meetings.push(meeting);
  meetingScheduler.meetings.push(meeting);

  await meetingMember.save();
  await meetingScheduler.save();

  res.status(201).send(meeting);
};

exports.getMeeting = async (req, res) => {
  const meeting = await Meeting.findById(req.params.id)
    .populate("member")
    .populate("scheduler");

  console.log(meeting);

  if (!meeting) {
    const error = new Error("meeting not found");
    error.statusCode = 404;
    throw error;
  }

  res.status(200).send(meeting);
};
