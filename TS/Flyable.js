var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Bird Had To Fly Before they died");
    };
    return Bird;
}());
var Aeroplane = /** @class */ (function () {
    function Aeroplane() {
    }
    Aeroplane.prototype.fly = function () {
        console.log("Aeroplane Fy");
    };
    return Aeroplane;
}());
var b = new Bird();
b.fly();
b = new Aeroplane();
b.fly();
