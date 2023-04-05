const prompt = require("prompt-sync")();


let code1, user1, M2, S2, answer;



function email() {

    do {
        let option = prompt("Send or Recive?:\t");


        if (option == "send") {

            let username = prompt("Username:\t");
            let code = prompt("code:\t");
            let S1 = prompt("Enter Your Subject ");
            let M1 = prompt("Enter Your Message ");

            if (M1.length <= 20) {
                S2 = S1
                M2 = M1
                code1 = code
                user1 = username
                console.log("sucessful")
            }
            else {
                console.log("length is too much");
            }
        }

        else if (option == "receive") {
            let username2 = prompt("Username\t");
            let code = prompt("code\t")


            if (username2 == user1 && code1 == code) {
                console.log(S2, M2);
                console.log("sucessfully recived");
            }


            else {
                console.log("LOGIN FAILED!");
            }
        }

        answer = prompt("Continue   ?")
    } while (answer == 'yes')

}
email();
