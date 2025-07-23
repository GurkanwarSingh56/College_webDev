import mongoose from "mongoose";

const schemaUser =new mongoose.Schema({
    name:{type :String},
    email:{type:String},
    password:{type:String},
    phoneNumber:{type:String},
    age:{type:Number}
});
const userModel = mongoose.model("user", schemaUser);
export { userModel };