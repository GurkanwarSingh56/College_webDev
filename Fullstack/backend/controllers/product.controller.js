import { productModel } from "../models/product.user.js"; 
const createProduct= async(req, res)=>{
    const { title, Image, brand, price, discription, rating, catagory } = req.body;
    try {
        const data = new productModel({
            title,
            Image,
            brand,
            price,
            discription,
            rating,
            catagory
        });
        await data.save();
        res.status(200).json({ message: "data saved successfully", data });
    } catch (error) {
        res.status(500).json({ error: error.message });   
    }
};
const getProduct = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export {createProduct , getProduct};