const express =require ('express')
const app =express();
app.use(express.json());
const connection =require ('./configs/db');
const { userRoute } = require('./routes/user.route');
app.get("/",(req,res)=>{
    res.send("Welcome to the backend");
});
app.use(userRoute);
const port =3000;
app.listen(port, async () => {
    try {
    console.log("Database is connecting...");
    await connection;
    console.log("database is connected");    
}
catch(err){
    console.log("error");
}
console.log(`server is started at http://localhost:${port}`)
});