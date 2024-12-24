function optProps(obj) {
    console.log("Name", obj.name);
    console.log(obj.age ? "Age Occured" : "Age Denied");
}
var p1 = {
    name: "Egon"
};
optProps(p1);
var p2 = {
    name: "egonh",
    age: 30
};
optProps(p2);
