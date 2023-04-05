const prompt = require("prompt-sync")();


let mainpassword=[]
let name=[]
let answer;

do {
    let users = prompt("Signup or Login?:\t");

    if (users == "Signup" || users == "signup") {
      let user=(prompt("Username:\t"));
       let password=(prompt("Password:\t"));
      let mpassword=(prompt("Confirm password:\t"))

        if (mpassword === password ) {
            name.push(user)
            mainpassword.push(mpassword)
           console.log(" SignUp Sucessful!");
         
                                            }  

        else {
            console.log("PASSWORD MISMATCH");
        }

    }

    else if (users == "Login" || users == "login") {
        let user=(prompt("Username:\t"));
       let password=(prompt("Password:\t"));
      

        if (name.includes(user) ) {
            console.log("LOGIN SUCCESSFULL!");
        } else {
            console.log("LOGIN FAILED!");
        }
    }


    else {

    }
    answer = prompt("Do you want to use service again(yes/no)");
} while (answer == "yes")