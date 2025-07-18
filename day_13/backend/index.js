const express = require('express');
const port=require('./configs/port');
const user=require('./models/user');
// const {showUserInfo ,create,updateUser}=require('./routes/route');
const createUser=require("./controllers/createUserController")
const updateUser=require("../backend/controllers/updateUserController")
const showUser=require("../backend/controllers/showUserController")

const deleteUser=require("../backend/controllers/deleteUserController")


const app=express();
updateUser(app)
createUser(app)
showUser(app)
deleteUser(app)






app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}   );

