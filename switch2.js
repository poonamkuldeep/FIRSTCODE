const int=require("readline-sync");
let arr=int.question("enter full array as string:\n>");

let b=arr.split(",");
console.log(b);

for (let i = 0; i < b.length; i++){
    b[i] = b[i]*1
}
console.log(b);

