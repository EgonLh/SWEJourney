function hello() {
    console.log("Hello......");
}
function greet() {
    console.log("Greet.....");
}
var words = hello;
words();
words = greet;
words();
