function add(x:number , y:number):number
{
    return x+y
}

function multiply(x:number , y:number):number
{
    return x*y;
}

// creating function type
type Fn = (a:number,b:number)=>number;

let fn:Fn = add;
console.log(fn(1,2));

function callback(data:number){
    console.log("Number :",data);
}
type Callback = (x:number) => void;
function processLater(callback:Callback){
    setTimeout(()=>{
        callback(100);
    },1000)
}

processLater(callback)