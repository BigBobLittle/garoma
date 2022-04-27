exports.notFound = (req , res)=>{

   res.status(400).send({
       error:"Resource not found",
   });
};