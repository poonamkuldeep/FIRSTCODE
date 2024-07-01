
const input = require('readline-sync')
let a = ['1','0','0','1','1','0','0']
let c = 0;

for (i = 0; i  < a.length; i++)
{
  if(a[i] === '0')
  {
    let temp = a[i];
    a[i] = a[c];
    a[c] = temp;
    c++;
  }
  }
  console.log(a)
