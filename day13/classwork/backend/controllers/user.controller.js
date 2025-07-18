const { userModel } = require("../middleware/model/user.model");
const bcrypt = require("bcrypt");

const userSignup = async (req, res) => {
    const { name, email, password, phoneNumber, age } = req.body;
    // console.log(req.body);
const userExist = await userModel.findOne({ email });
if (userExist) {
    return res.send("user already exist")
}
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(400).send("Error while hashing");
            } else {
                try {
                    const user = new userModel({
                        name,
                        email,
                        password: hash, 
                        phoneNumber,
                        age
                    });
                    await user.save();
                    res.status(200).send("User data successfully stored in db");
                } catch (error) {
                    res.status(400).send({ error: error.message });
                }
            }
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const userLogin = () => {
    
};

module.exports = { userSignup, userLogin };