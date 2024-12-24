function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
var fn = add;
console.log(fn(1, 2));
function callback(data) {
    console.log("Number :", data);
}
function processLater(callback) {
    setTimeout(function () {
        callback(100);
    }, 1000);
}
processLater(callback);
