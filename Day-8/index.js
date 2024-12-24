
    console.log('Hello, World');
    let result =undefined + 10;
console.log(result);
    
let obj = {
    valueOf() {
        return '1';
    },
    toString() {
        return '0';
    }
};
let c = 1 + obj;
console.log(c);


// str

let str = '10';
console.log('Str ',typeof(str));
++str;
console.log('Str ', typeof (str));

// Obj
let obj1 = {
    valueOf() {
        return '10';
    }
}
console.log('Obj1 -', typeof (obj1));
++obj1;
console.log('Obj1 -', typeof (obj1));
