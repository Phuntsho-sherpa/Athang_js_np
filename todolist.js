const prompt = require("prompt-sync")();

let details = prompt("Task: ");



switch (details) {
    case "wake up":
        console.log("6am");
        break;
    case "Breakfast":
        console.log("7am");
        break;
    case "lunch ":
        console.log("8am");
        break;

        case "dinner ":
        console.log("8am");
        break;
    default:
        console.log("wrong inputs");
        break;
}