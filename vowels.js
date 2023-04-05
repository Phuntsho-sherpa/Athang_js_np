const prompt = require("prompt-sync")();

// let count = 0
// let count1 = 0
// let word = prompt("Enter any Words\t");

// for (i = 0; i <= word.length; i++) {
//     if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u'){
//         count++
// }
// else {
//     count1 ++;
// }

//  }

// console.log("consonants"+count);
// console.log("vowles"+count1);

let count = 0

let word = prompt("enter a word")
let word2 = prompt("Enter a word:");
let a = 4


for (i=0; i<4; i++) {
 if (word[i] == word2[a] ){
     count++
}
  
}
console.log(count);