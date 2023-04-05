const prompt = require("prompt-sync")();
let name, Age, Cid, Eng, dzo, math, fees, percentage

console.log("LGA");


   let grade = prompt("Enter Your Grade ");
    if(grade == 1) {
    name = prompt("Name");
    Age = parseInt(prompt("Age"));
    Cid = parseInt(prompt("Cid"));
    Eng = parseInt(prompt("Eng"));
    dzo = parseInt(prompt("dzo"));
    math = parseInt(prompt("math"));
    fees = parseInt(prompt("fees"));
    percentage = (Eng + dzo + math) / 3;

 
    if (fees == 25000 && percentage >= 60) {

        console.log("\nAdmission Detail\nName: " + name, "\nAge: " + Age, "\nPercentage: " + percentage);
        console.log("\nAdmission Successfull!!");
    }

    else {
        console.log("Admission Failed!!");
    }


}

   else if(grade == 2) {
    name = prompt("Name");
    Age = parseInt(prompt("Age"));
    Cid = parseInt(prompt("Cid"));
    Eng = parseInt(prompt("Eng"));

    dzo = parseInt(prompt("dzo"));
    math = parseInt(prompt("math"));
    fees = parseInt(prompt("fees"));
    percentage = (Eng + dzo + math) / 3;

    if (fees == 30000 && percentage >= 40) {

        console.log("\nAdmission Detail\nName: " + name, "\nnAge: " + Age, "\nPercentage: " + percentage);
        console.log("\nAdmission Successfull!!");
    }

    else {
        console.log("Admission Failed!!");
    }


}


   else if(grade == 3) {
    name = prompt("Name");
    Age = parseInt(prompt("Age"));
    Cid = parseInt(prompt("Cid"));
    Eng = parseInt(prompt("Eng"));
    sci = parseInt(prompt("sci"));
    dzo = parseInt(prompt("dzo"));
    math = parseInt(prompt("math"));
    fees = parseInt(prompt("fees"));
    percentage = (Eng + dzo + math+sci) / 4;


    if (fees == 45000 && percentage >= 50) {

        console.log("\nAdmission Detail\nName: " + name, "\nAge: " + Age, "\nPercentage: " + percentage);
        console.log("\nAdmission Successfull!!");
    }

    else {
        console.log("Admission Failed!!");
    }



}
else {
    console.log("wrong input");
}
