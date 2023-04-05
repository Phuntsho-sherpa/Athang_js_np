const prompt = require("prompt-sync")();





let email,answer


do{
email = prompt("email:\t");
compemail = prompt("Confirm email:\t")



if (email === compemail) {

    if (email.includes("@gmail.com")) {

        console.log("Email confirmed");
    }

  
  
    else {
        console.log("wrong formate");
    }
}
else {
    console.log("fail to enter");
}

answer = prompt("Do you want to use service again(yes/no)");

}while(answer == "yes")
