var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _Point = /** @class */ (function () {
    function _Point(x, y) {
        this.x = x;
        this.y = y;
        console.log("Parent Constructor");
    }
    _Point.prototype.display = function () {
        console.log("Parnet Display - X :", this.x, " Y :", this.y);
    };
    return _Point;
}());
var p = new _Point(10, 30);
console.log(p.x);
var ThreeD = /** @class */ (function (_super) {
    __extends(ThreeD, _super);
    function ThreeD(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.x = x;
        _this.y = y;
        _this.z = z;
        return _this;
    }
    ThreeD.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("X :", this.x, " Y :", this.y, "Z : ", this.z);
    };
    return ThreeD;
}(_Point));
var three_D = new ThreeD(12, 22, 33);
three_D.display();
