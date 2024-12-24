let a = 10;
let b = 20;
let temp = a;
a=b;
b=temp;
console.log(a);
console.log(b);

// With destruction
let [x,y]=[1,2];
console.log('x',x);
console.log('y',y);

[y,x]=[x,y];

console.log('x',x);
console.log('y',y);
