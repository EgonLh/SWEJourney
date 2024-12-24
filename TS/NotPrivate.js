var _Data_data;
var Data = /** @class */ (function () {
    function Data() {
        _Data_data.set(this, 10);
    }
    return Data;
}());
_Data_data = new WeakMap();
var obj = new Data;
var another = obj;
// console.log("Data :" , obj.data);
// console.log("Data :",another.data);  // <- we are good
console.log(another.);
