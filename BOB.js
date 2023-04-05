const prompt = require("prompt-sync")();

let name, duration, withdraw, Total
let answer;
do{
console.log("Bank of Bhutan");

console.log("1. Loan");
console.log("2. Withdrawal & Deposit");
console.log("My Net Profit  ");

let gp = prompt("Choose Your Preference: ");


if (gp == 1) {
    name = prompt("Name:")
    let amount = prompt("Enter Your Amount:");
    duration = parseInt(prompt("duration:"))

    intrest = (amount * 0.015) / duration
    total = ((amount / duration) + intrest)


    console.log("Your Result is Ready.");
    console.log("Monthly:", "\n" + intrest);
    console.log("Total:" + total)
}

else if (gp == 2) {

    console.log("withdraw or Deposit?")
    let wit = prompt("enter your choice:")

    if (wit == "withdraw") {
        let balance = 50000
        let withdraw = prompt("Enter Your Withdraw_Amount:");
        let total = (balance - withdraw)

        console.log("Your balance" + total);


        if (withdraw <= balance) {
            console.log("Your result is here" + name);
            console.log("Blance" + total);

        }

        else {

            console.log("You dont have enough balcance");
        }



    }

    else if (wit == "Deposit") {
        let balance = 50000
        let withdraw = parseInt( prompt("Enter Your deposit-Amount:"));
        let total = (balance + withdraw)

        console.log("Your balance is:" + total);
    }

}

else if (gp == 3) {

    let amount = prompt("Enter Your Amount:");

    if (amount = 50000) {
        name = prompt("Name:")
        duration = parseInt(prompt("duration:"))

        total = (amount * 0.05) * duration
        profit = ((amount + total))


        console.log("Your Result is Ready");
        console.log("Profit", " " + total);
        console.log("Total:" + profit);
    }
}
else {
    console.log("wrong input");
}
answer = prompt("\nDo you want to continue the service yes or No")
}

while (answer == "yes" || (answer == "Yes"))