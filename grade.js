const prompt = require("prompt-sync")();

let answer
do{
let grade = parseInt(prompt("Enter Your grage:"));


if(grade <=100 && grade >=90){
    console.log("Grade A");
}


else if (grade <=90 && grade >=50){
    console.log("Grade B");
}
else  if(grade <=50 && grade >=30){
    console.log("Grade C");
}


if (grade <=30 && grade >=20){
    console.log("Grade D");
}
else{
    console.log("grage doesnt exists");
}
answer = prompt("\nDo you want to continue the service yes or No")
}
while(answer == "yes" || answer=="Yes" || answer=="YES")