// function test(msg:string){
//     console.log(msg);
    
// }
// test(1)

function add(a:number,b:number):number
{
    return a+b;
}

console.log(add(1,2));


async function GetFavouriteNumber(): Promise<number> {
        return 20;
}
GetFavouriteNumber()
    .then(data => data*2)
    .then(console.log);