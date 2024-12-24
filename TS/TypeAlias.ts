type Point = {
    x: Number
    y:Number,
}


function printCoord(pt:Point){
    console.log("X Coordinate :",pt.x);
    console.log("Y Coordinate :",pt.y);
}

printCoord({x:100,y:200})

type ourNum = number;
let k:ourNum = 3;
console.log(typeof k);
