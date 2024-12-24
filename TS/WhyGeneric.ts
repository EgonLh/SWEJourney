type Stack = {
    item :string[];
}


let stack : Stack = {
    item : ["Hello ", "World"]
}


//  with generic
type GenStack<Type> = {
    item : Type[];
}

let numStack : GenStack<number> = {
    item : [1,3,4,5]
}

let stringStack : GenStack<string> = {
    item  : ['1','2','3','4']
}

let numArr = Array<number>;

const roArray: ReadonlyArray<String> = ["red" , "green " , "blue"];
// roArray[0] = "something"
