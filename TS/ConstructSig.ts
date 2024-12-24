class Human {
  name: string;
  constructor(name: string) {
    this.name = name;
    console.log("This is human constructor....");
  }
}

class Another {
    name: string;
    constructor(name: string) {
      this.name = name;
      console.log("This is another constructor....");
    }
  }

//   fuction type which accept both another and human
type Construct = {
    new (s:string) :Another | Human
}  

let con:Construct = Human;
let obj = new con("TK");
console.log(obj)

con = Another
let a = new con("Another Egon");
console.log(a);
  