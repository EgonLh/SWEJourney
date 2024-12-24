// function firstElement(arr:any[]){
//     return arr[0]
// }

// console.log("First Number :",firstElement([1,"tets",true]));

function firstElement<Type>(arr:Type[]):Type | undefined{
    return arr[0]
}

// console.log("First Number :",firstElement<number>([1,"tets",true]));
console.log("First Number :",firstElement<number>([1,2,3]));

