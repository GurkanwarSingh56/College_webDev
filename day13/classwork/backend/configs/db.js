const mongoose = require("mongoose")

const connection= mongoose.connect("mongodb+srv://gurkanwarsingh56:gavisaini@cluster0.txkxphy.mongodb.net/myFirstDB?retryWrites=true&w=majority&appName=Cluster0");

module.exports={
    connection
}
