type Position = {
    x:number,
    y:number,
    z?:number
}

function showLocation(pos:Position){
    console.log(pos?.z);
}

// showLocation({x:10,y:30})
showLocation({x:10,y:30,z:30})
