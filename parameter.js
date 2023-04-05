const Prompt = require('prompt-sync');

// const prompt = require(prompt - PromptSync)


// function plan(name, age) {
//     return 'hello   ' + name + '   age   ' + age;
// }
// let name = 'namgay'
// let age = 24                       // inserting the out side value into inside parameter



// console.log(plan(name, age));






function variables() {
    let a = 17;
    let b = 26;
    add(a, b);
    sub(a, b);
}
function add(a,b) {
    let sum = a + b;
    console.log(sum);
}

function sub(a,b) {
    let result = a - b;
    console.log(result);
}
variables();