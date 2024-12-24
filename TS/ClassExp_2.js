var Crircle = /** @class */ (function () {
    function Crircle() {
    }
    Crircle.prototype.display = function () {
        console.log("Circle....");
    };
    return Crircle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.display = function () {
        console.log("Rectangle....");
    };
    return Rectangle;
}());
var con = Crircle;
var obj_ = new con();
obj_.display();
con = Rectangle;
obj_ = new con();
obj_.display();
