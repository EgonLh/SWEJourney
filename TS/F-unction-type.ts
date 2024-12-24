function invokeCallback(fn:Function){
    return fn();
}
function callback(){
    return "Hello";
}

console.log(invokeCallback(callback));
