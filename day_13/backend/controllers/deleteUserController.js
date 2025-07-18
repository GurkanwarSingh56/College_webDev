
const {deleteRoute}=require("../routes/route");
 const  user =require("../models/user");


 function deleteUser(app){

    app.get(deleteRoute,(req,res)=>{
             user.id=0;
    user.name="";
    user.course=" ";
    user.rollNumber=0;
   //  console.log(user)
      res.send(user)
    })
 }

   module.exports=deleteUser;

 
