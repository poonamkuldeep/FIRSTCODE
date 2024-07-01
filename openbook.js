const input = require("readline-sync")
let a = input.questionInt("enter the value:-")
let b = input.questionInt("enter the value:-")
let i = 0;
let sum ;

   sum = a + b;

   if (sum === 2)
   {
    console.log('alice')
   }else
   {
      if(sum % 2 !== 0)
      {
        console.log('alice')
      }else
      {
        console.log('bob')
      }
   }

