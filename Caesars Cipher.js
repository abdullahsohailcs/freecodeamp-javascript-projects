/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let arr = str.split('');
  for(let i=0;i<str.length;i++)
  {
    if(str[i]>="A" && str[i]<="Z")
    {
      for(let ii=0;ii<13;ii++)
  {
      if(arr[i] > "Z"){
        arr[i]="A";
      }
      else if(arr[i]=="Z"){arr[i]="A"}
      else{
      arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }}}
    else
    {

    }
  }
  str = arr.join('');
  return str;
}

console.log(rot13("SERR PBQR PNZC"));