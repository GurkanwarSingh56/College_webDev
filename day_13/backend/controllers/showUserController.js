
 const  user =require("../models/user");
 const {show,create,update}=require("../routes/route")


 function showUser(app){

    app.get(show,(req,res)=>{
    //         user.id=0;
    // user.name="Manpreet";
    // user.course="Mern";
    // user.rollNumber=2305546;
    // // console.log(user)
      res.send(user)
    })
 }

   module.exports=showUser;

 
