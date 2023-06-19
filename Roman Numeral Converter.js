/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

*/

function convertToRoman(num) {
  let key = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  let value = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
     let remainder;
let str='';
let i=12;
while(num>0)
{
let div = Math.floor(num/value[i]);
num = num%value[i];
while(div>0)
{
  str=str+key[i];
  div--;
}
i--;
}

 return str;
}

console.log(convertToRoman(36));