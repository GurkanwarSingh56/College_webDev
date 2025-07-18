// import os from 'os';
// console.log(os.homedir());
// import http from 'http';
// console.log(http);
// const fs = require("fs");
// const { console } = require("inspector");
// const data =fs.writeFile('data.txt','utf8',(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// })
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));