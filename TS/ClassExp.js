var someClass = /** @class */ (function () {
    function class_1(value) {
        this.content = value;
        console.log("Constructor");
    }
    return class_1;
}());
var obj = new someClass("Hello");
console.log("obj ", obj);
