class Point {
    x:number;
    y:number

    constructor(x:number,y:number) {
        this.x = x;
        this.y = y
    }
}

interface PointV2
{
    x:number;
    y:number;
}

interface PointV2{
    z:number
}

let obj = new Point(10,20);
console.log(obj.x);
