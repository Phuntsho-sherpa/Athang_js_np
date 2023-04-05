const prompt = require("prompt-sync")();

let name, duration, withdraw, Total
// let answer;
// do{
console.log("Signup or Login?:\t");

console.log("1. Signup");
console.log("2. Login ");

let email = prompt("Choose Your Preference: ");


if (email == 1) {
    username = prompt("Username:\t");
    let code = prompt("code:\t");
    S1 = parseInt(prompt("Enter Your Subject "));
    M1 = parseInt(prompt("Enter Your Message "));

}

else if (email == 2) {


    username2 = prompt("Username\t");
    code = prompt("code\t")



    if (username2 == user1  && code1) {
        console.log(S1, M1);
    }
    console.log("sucessfully recived");

}
else {
    console.log("LOGIN FAILED!");
}