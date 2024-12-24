type Human = {
    readonly name : string;
    age: number;
    readonly address :{
        city : string;
        road ?: string
    }
}

let h : Human ={
    name : "Egon",
    age : 40,
    address :{
        city : "Pyay"
    }
}
// h.name = "something else" > readonly error
h.address.city = "Yangon";

