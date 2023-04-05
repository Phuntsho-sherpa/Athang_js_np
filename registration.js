const prompt = require("prompt-sync")();



let user1, mainpassword,user2,mainpassword2,user3,mainpassword3;
count = 1;
let answer;

do {
    let users = prompt("Signup or Login?:\t");

    if (users == "Signup" || users == "signup") {
        username = prompt("Username:\t");
        let password = prompt("Password:\t");
        let compassword = prompt("Confirm password:\t")

        if (password === compassword && count== 1) {
           count++;
            user1 = username;
            mainpassword = password;
         
                                            } 


        else if (password === compassword && count==2){
                user2 = username;
             mainpassword2 = password;
             count++;
             console.log(" SignUp Sucessful!");
            }
            
          

        else {
            console.log("PASSWORD MISMATCH");
        }

    }

    else if (users == "Login" || users == "login") {
        username1 = prompt("Username:\t");
        let password = prompt("Password:");
        let compassword = prompt("Confirm-Password:");

        if ((username1 == user1 && password == mainpassword) || (username1 == user2 && password == mainpassword2) ) {
            console.log("LOGIN SUCCESSFULL!");
        } else {
            console.log("LOGIN FAILED!");
        }
    }


    else {

    }
    answer = prompt("Do you want to use service again(yes/no)");
} while (answer == "yes")