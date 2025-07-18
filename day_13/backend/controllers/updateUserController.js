
 let user =require("../models/user");
 const {show,create,update}=require("../routes/route")
 const IdGenerator =require("../utils/idGenerator");

 const updateUser =(app)=>{
     app.get(update, (req, res) => {
        console.log("outside .get")
        user.id = IdGenerator();
        user.name = "Tony ";
        user.course = "AI";
        user.rollNumber = 236821;
        // console.log(user)
        res.send(user);
    })

 }

   module.exports=updateUser;

 
