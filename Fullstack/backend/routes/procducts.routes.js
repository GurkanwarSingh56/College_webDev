import express from "express";
import { createProduct, getProduct } from "../controllers/product.controller.js"; 

const productRoutes= express.Router();

productRoutes.post("/create_product",createProduct);
productRoutes.get("/get_products",getProduct);
export {productRoutes};