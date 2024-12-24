function hello(){
    console.log("Hello, ");
}
hello.some = "data";
type DescriptionFunc = {
    some : string,
    () : void;
}

let fun:DescriptionFunc = hello;
fun()