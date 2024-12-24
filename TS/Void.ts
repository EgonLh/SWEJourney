function hello()
{
    console.log("Hello......");
    
}
function greet()
{
    console.log("Greet.....");
    
}

type Fn = () => void;
let words:Fn = hello;
words();
words = greet;
words();