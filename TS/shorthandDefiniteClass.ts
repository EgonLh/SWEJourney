interface displayable {
    display: () => void;
}
class _Point implements displayable {
    constructor(public x: number, public y: number) {
        console.log("Parent Constructor");
    }
    display() {
        console.log("Parnet Display - X :", this.x, " Y :", this.y);

    }
}

let p = new _Point(10, 30);
console.log(p.x);

class ThreeD extends _Point {
    constructor(public x: number, public y: number, public z: number) {
        super(x, y);
    }
    display() {
        super.display();
        console.log("X :", this.x, " Y :", this.y, "Z : ", this.z);

    }
}

let three_D = new ThreeD(12, 22, 33);
three_D.display()