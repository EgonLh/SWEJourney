// let obj = {
//     name :"Tk",
//     age :12
// }

type Human = {
    name : string,
    age : number
}

let a:Human = {
    name :'Egon',
    age :30
}

console.log(typeof a);

// function display(obj:Human){
//     console.log("Name :",obj.name, "\n Age :",obj.age);
// }
function display(obj:{
    name:string,
    age:number
}){
    console.log("Name :",obj.name, "\n Age :",obj.age);
}

display(a)

