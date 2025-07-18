
 const  user =require("../models/user");
 const {create}=require("../routes/route");


 function createUser(app){
   
    app.get(create,(req,res)=>{
       user.id=0;
    user.name="Manpreet";
    user.course="Mern";
    user.rollNumber=2305546;
   //  console.log(user)
      res.send(user)
    })
 }

   module.exports=createUser;

 
