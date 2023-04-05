// let names = ['karma', 'namgay', 'pema', 24]   

// for (let i=0;i<names.length; i++){     //use names.length to know length of array
// console.log(names[i]);
// }


let names = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

// for (let i=9; i>=0; i--){
//     console.log(names[i]);  // print 10 to 9
// }



// for (i=0; i>10; i++){

//     console.log(names[i]);
//     i++;
//     }                           //ODD

//     for (i=9; i>=0; i--){
// console.log(names[i]);
// i--
//     }
const prompt = require("prompt-sync")();

    let number =[]


    for(i=1; i<=10; i++){
    
        number.push(parseInt(prompt("enter num1"+i+"")))
}


    console.log(number);