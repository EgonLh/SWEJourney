let a = 2;
let b = 3;
let result = a.toString(2);
console.log('2 in toStrng',typeof(result),' ',result);
console.log('3 in Binary ', a.toString(2));

console.log('2 and 3 in Bitwise Operator', (a & b).toString(2));
console.log('2 OR 3 in Bitwise Operator', (a | b).toString(2));
console.log('2 XOR 3 in Bitwise Operator', (a ^ b).toString(2));
console.log('~a in Bitwise Operator ', (~a).toString(2));//why -11
// console.log(a.toString(2));
console.log('a<<1 in Bitwise Operator', (a << 1).toString(2));
console.log('a<<1 in (Decimal)', a << 1);

console.log('a>>1 in Bitwise Operator', (a >> 1).toString(2));
console.log('a>>1 in (Decimal)', a >> 1);

// Triple and Double equal
console.log('1' == 1);
console.log('1' === 1);
console.log(null === undefined);
console.log(-0 === 0);


// Double Equal
// Rule 1
console.log('same type === same type', 3 === 3);
// Rule 2 and 3
console.log('null type === undefined', null == undefined);
console.log('undefined === null type', undefined == null);







