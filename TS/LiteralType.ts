type PromiseStatus = "pending" | "fullfilled" | "rejected" ;
type RGB = "red" | "green" | "blue";

// literal union


function colors(color:RGB){
    console.log(color);
}

colors("red");
colors("blue");
// colors("Nigga");


// function process(x:?string){
//     console.log("HEllo , ",x);
// }

function process(x:string | undefined){
    console.log("HEllo , ",x);
}

process("Hello");
// process(1);

function isDangerous(x?:number|null){
    console.log(x!.toFixed());
}

isDangerous(2)