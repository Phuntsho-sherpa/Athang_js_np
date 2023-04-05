const prompt = require("prompt-sync")();




console.log("1.Add User\n.2.Remove the last user\n3.View DATAQA");


let Data = []
let answer;

do {
    let option = prompt("Choose Your Preference: ");

    if (option == 1) {
        Data.push(prompt("Username\t"));

    }
    if (option == 2) {
        Data.pop()

        console.log("remove sucessful");
    }
    else if (option == 3) {

        console.log("view Details");
        console.log(Data);


    }

    answer = prompt("\nPress Enter to Continue")
}

while (answer != "no")