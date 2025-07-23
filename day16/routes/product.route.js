import express from "express";
import {products} from "../controllers/procducts.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";

const productsRoute = express.Router();

productsRoute.get("/products",auth, products);

export default productsRoute;
