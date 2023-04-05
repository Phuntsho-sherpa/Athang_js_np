const prompt = require("prompt-sync")();




let answer;
let id = []
let name = [];
let Em = []
let date = [];


do {
    console.log("EMPLOYEE MANAGEMENT SYSTEM\n");
    console.log("\t\tEMPLOYEE LIST");

    console.log("\n\tEMPLOYEE NAME", "\tEMPLOYEE ID", "\tDATE\n");
    for (let i = 0; i < name.length; i++) {

        console.log("\t" + name[i] + "\t\t" + Em[i] + id[i] + "\t\t" + date[i] + "\t\n");
    }


    let option = prompt("\n1.ADD 2.REMOVE 3.UPDATE\t");


    if (option == 1) {
        const newId = name.length + 1

        console.log("1.Add Employee");

        name.push(prompt("Enter Employee name:\t"));
        date.push(parseInt(prompt("Enter the date")));

        Em.push("EM- ");
        id.push(newId)
        console.log("Entered sucessuflly");
    }


    if (option == 2) {

        let emp = (parseInt(prompt("Enter the id:EM- ")));
         for (let i = 0; i <= name.length; i++) {

        if (id.includes(emp)) {
            emp = emp - 1

            name[emp] = " ";
            date[emp] = " ";
            id[emp] = " ";
            Em[emp] = " ",
               emp = 10000000;
                console.log("Remove sucessful");
        }
    }
    }
    else if (option == 3) {



        let emp1 = (parseInt(prompt("Enter the id:EM- ")));



        if (id.includes(emp1)) {


            let newname = (prompt("Enter Employee name:\t"));
            let newdate = (parseInt(prompt("Enter the date")));

            emp1 = emp1 - 1
            name[emp1] = newname;
            date[emp1] = newdate;
            console.log(" sucessful");
            emp1 = 10000000000;

        }

    }
    answer = prompt("Press enter to Continue")
}
while (answer != 'no')



