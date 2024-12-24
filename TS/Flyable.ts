interface Flyable
{
    fly : () => void;
}

class Bird implements Flyable
{
    fly(){
        console.log("Bird Had To Fly Before they died");
    }
}

class Aeroplane implements Flyable{
    fly() {
        console.log("Aeroplane Fy");
    }
}

var b:Flyable = new Bird();
b.fly();

b = new Aeroplane();
b.fly()