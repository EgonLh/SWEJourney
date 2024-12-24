// Rule 4,5
console.log("String to Number :", '3' == 3);
console.log('Number to String :', 100 == '100');
// Rule 6,7
console.log("Boolean to Any :", true == '1');
console.log("Any to Boolean :", '0' == false);
// another topic
console.log('False == undefined :', false == undefined);
// Rule 8,9
let obj = {
    valueOf() {
        return 10;
    }
}
console.log('String / Number  == object :', 10 == obj);
console.log('String / Number  == object :', '10' == obj);
console.log('String / Number  == object :', true == obj);


// Rule 10
console.log('False == null:', false == null);
console.log('true == undefined:', false == null);

// Best practice
console.log('+False == +null:', +false == +null);


// Comparsion Operator

console.log('1 < 2 :',1 < 2);
console.log('a > a :', 'a' > 'a');

// if object
let obj2 = {
    // valueOf() {
    //     return 1;
    // },
    toString() {
        return '0';
    }
}
console.log('Obj >= 0 :', obj2 >= 0);

// String - String
console.log('String > String ', 'A' < 'B');
console.log('true >  false', true > false);
console.log('true >  undefined', true > undefined);
let v = 'test';
console.log(++v);

console.log('1<BigInt(0)', 1 > BigInt(1));
console.log('"11">"3"', '11' > '3');

let info = {
    name: 'ZYH',
    age: '12',

    location: 'Pyay',
    address: undefined,
}

console.log('name' in info );
console.log('address' in info);
console.log('address1' in info);
console.log('toString' in info);
console.log('valueOf' in info);

// Array
let arr = [1, 2, 3, 4, 5];
console.log('"0" in arr :', '0' in arr);
console.log('"5" in arr :', 5 in arr);

// Can't use "in " in string


// Instance
class myProfile{
    constructor() {
        this.myAge=12
    }
    
}

let d = new myProfile();
// console.log(d.myAge);
// Instanceof 
console.log('d instrance of Object :', d instanceof Object);
console.log('d instrance of myProfile :', d instanceof myProfile);
console.log('d instrance of Number :', d instanceof Number);

let e = {
    name:'TK'
};
console.log('e instance of Object', e instanceof Object);
console.log('arr instance of Array', arr instanceof Array);
let date = new Date();
console.log('date instance of Date', date instanceof Date);

