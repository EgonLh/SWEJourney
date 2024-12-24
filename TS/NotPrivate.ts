class Data {
    #data = 10;
}

var o:Data = new Data;
let another:any = o;
// console.log("Data :" , obj.data);
// console.log("Data :",another.data);  // <- we are good
// console.log(another.#data); // <- Mandalay Apporach
