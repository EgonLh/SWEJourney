console.log(!{});
let a = b = 1;
console.log(a);

a += 20 + b;//20+1 -> 22
console.log(a);

let data = [1, 2, 3, 4];
let i = 0;
console.log(data[i++] += data[i++] * 3)
console.log(data[i++] += 2);
console.log(data);
