function invokeCallback(fn) {
    return fn();
}
function callback() {
    return "Hello";
}
console.log(invokeCallback(callback));
