const input = require("readline-sync")
let n = input.questionInt("enter the number:-")
let sum = 0;
function sumofcube(){
       
    let sum = 0;
    for (let i = 0; n!==0; i++ )
    {
        remind = n % 10;
        // cube = remind**3;
        sum = sum+remind**3
        n = Math.floor(n/10);
       
        // sum = sum + cube;
    }
    console.log(sum)

} 

 sumofcube()
