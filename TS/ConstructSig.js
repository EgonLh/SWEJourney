var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
        console.log("This is human constructor....");
    }
    return Human;
}());
var Another = /** @class */ (function () {
    function Another(name) {
        this.name = name;
        console.log("This is another constructor....");
    }
    return Another;
}());
var con = Human;
var obj = new con("TK");
console.log(obj);
con = Another;
var a = new con("Another Egon");
console.log(a);
