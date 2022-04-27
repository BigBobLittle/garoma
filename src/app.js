const express =  require("express");
const { errorHandler } = require("./errorhandler/errorHandler");
const Router=  require("./router/Router");
const { notFound } = require("./errorhandler/NotFound");
require("express-async-errors");
require("dotenv").config();
const app =  express();

app.get("/" , (req ,res)=>{

    res.send("INTERN TASK");

});

app.use(Router);

app.use("*" , notFound);
app.use(errorHandler);
module.exports = app ;