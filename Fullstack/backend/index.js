import express from "express";
import dotenv from "dotenv";
import { connection } from "./configs/db.js";
import userRoute from "./routes/user.routes.js";
import cors from "cors";
import { productRoutes } from "./routes/procducts.routes.js";

dotenv.config();

const port = process.env.PORT;
const app = express();



app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("server is running");
});
app.use("/api/user", userRoute);
app.use("/api/product", productRoutes);
app.listen(port, async() => {
    try{
        console.log("database is connecting");
        await connection;
        console.log("database is connected");
    }
    catch(error){
      console.log("Database connection failed:", error.message);
        console.log("Full error:", error);
    }
    console.log(`server is running on port http://localhost:${port}`);
});