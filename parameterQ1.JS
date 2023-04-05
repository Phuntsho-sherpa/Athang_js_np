const prompt = require("prompt-sync")();
console.log("Enter 1 to add");
console.log("Enter 1 to sub");
console.log("Enter 1 to div");
console.log("Enter 1 to mul");

let answer

do{
let calculate = prompt("enter your choice ");
function calculotor() {

    let num1 = parseInt(prompt("Enter 1st number"));
    let num2 = parseInt(prompt("Enter 2st number"));



    if (calculate == 1) {
      add(num1, num2);
    }


    else if (calculate == 2){
        sub(num1, num2);
    }


    else if (calculate == 3){
        div(num1, num2);}

    else if (calculate == 4){
        mul(num1, num2);}

      else{
        console.log("wrong Input");
      }
        
}

function sub(num1, num2) {
    let sub = num1 - num2;
    console.log("Result\t" +sub);
}

function add(num1, num2) {
    let sum = num1 + num2;
    console.log("Result\t" +sum);

}

    function div(num1, num2) {
        let div = num1 / num2;
        console.log("Result\t" +div);
    }


    function mul(num1, num2) {
        let mul = num1 * num2;
        console.log("Result\t" +mul);
    }
  

    calculotor();
    
    answer = prompt("\nDo you want to continue the service yes or No")
}
while(answer == yes)