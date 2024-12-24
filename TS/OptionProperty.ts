function optProps(obj:{
    name : string,
    age?:number
}){
    console.log("Name", obj.name);
    console.log(obj.age?"Age Occured" : "Age Denied");
    
}

let p1= {
    name:"Egon"
}

optProps(p1)

let p2 ={
    name : "egonh",
    age :30
}

optProps(p2);