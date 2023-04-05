const prompt = require("prompt-sync")();


let answer
let user = []
for (i = 0; i <= 4; i++) {
    user.push(prompt("enter users: "));

}

do {
    let number = parseInt(prompt("Enter a number"));
    console.log(user[number]);

} while (answer === "yes") {

}