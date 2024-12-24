class Crircle 
{
    display(){
        console.log("Circle....");
    }
}

class Rectangle 
{
    display(){
        console.log("Rectangle....");
    }
}

// exchaning classes - which is first class
let con = Crircle;
var obj_ = new con();

obj_.display();


con = Rectangle;
obj_ = new con();
obj_.display()