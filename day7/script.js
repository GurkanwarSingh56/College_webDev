// let arr=[1,2,3,4,"Gurkanwar",true,false,null,undefined]
// console.log(arr.length)
// console.log(arr)
// arr.push("singh")
// console.log(arr)
// arr.pop()
// for(var i=arr.length-1;i>=5;i--)
// {
//     arr[i+1]=arr[i];
// }
// arr[5]="singh";
// console.log(arr)
// let obj={
//     name:"Gurkanwar Singh",
//     batch:"fs",
//     age:19,
//     subjects:["HTML","CSS","JS","React","NextJS"],
//     college:"RB"
     
// }
// console.log(obj)
// console.log(obj.name)
// console.log(obj["age"])
// var arr=[1,2,3,4,5,6,7,8]
// for(let num of arr){
//     console.log(num)
// }
let obj={
    name:"Gurkanwar Singh",
    batch:"fs",
    age:19,
    subjects:["HTML","CSS","JS","React","NextJS"],
    college:"RB"
     
}
// var str="gurkanwar"
// for (const element of str ){
//     console.log(element)
// }
for (const key in obj) {
    if (typeof obj[key] == "string") {
        console.log(obj[key]);
    }
}
