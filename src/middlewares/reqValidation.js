
const {validationResult} =  require("express-validator");

exports.reqValidator = (req ,res,next)=>{

    const errors=  validationResult(req);
    if(!errors.isEmpty()){

       
        const error =  new Error("400");
        error.statusCode =  400;
        error.arrays =  errors.array();
       
        throw error;
 
    }

    next();
}