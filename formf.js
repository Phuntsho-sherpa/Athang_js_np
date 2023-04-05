const prompt = require("prompt-sync")();



function form(name,age,hobbies){
    console.log("Result");
    console.log("name"+name);
    console.log("age"+age);
    console.log("hobbies"+hobbies);
  
  
  }
function des(name, age , hobbies){

    console.log("His name is"+name+"his is now"+age +"years of age and he likes"+hobbies);
}
let name =prompt("name")
let age = parseInt(prompt("age"))
let hobbies = (prompt("hobbies"))



form(name, age ,hobbies);
des(name, age, hobbies)


