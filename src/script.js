const printer = document.getElementById("main");

const nmlist = [1,2,3,4,5,6,7,8,9];
for(const nmOne of nmlist){
    printer.innerHTML += `<p>${nmOne} </p>`;
}
//make a class that contain name and age for each person;
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
}
//now make an object for a person;
const jewelObs = new person('jewel',33);
jewelObs.sayHi();