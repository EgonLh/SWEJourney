type Color = {
    color : string,
}

type Border = {
    borderWith:number
}

type borderColor = Color & Border; // ADT - algebraic data type
let data : borderColor = {
    color : "read",
    borderWith :10
}