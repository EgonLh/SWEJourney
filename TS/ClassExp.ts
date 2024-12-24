const someClass = class<Type>{
    content : Type;
    constructor(value: Type){
        this.content = value;
        console.log("Constructor");
    }
}
var v = new someClass("Hello");
console.log("obj ",v);


