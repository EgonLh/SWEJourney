interface human{
    name : string,
    age : number
}
function greet(person:human): void {
    console.log("Hello , ", person.name);
    console.log("Hello , ", person.age);
}

let p1 = {
    name : "egon",
    age : 20
}

greet(p1);