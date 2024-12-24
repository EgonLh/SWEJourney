// Problem 1
function simpleArraySum(ar) {
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;

}
let a = [1, 2, 3]
console.log(simpleArraySum(a)); //solved


// Problem 2
// let arr = [];

// function compareTriplets(a, b) {
//     // outer
//     for (let i = 0; i < a.length; i++) {
//         // inner
//         for (let j = 0; j < b.length; j++) {

//             if (a[i] < b[j]) {
//                 arr.push('b');
//             } else if (a[i] > b[j]) {
//                 arr.push('a');
//             } else {
//                 arr.push('n');
//             }



//         }

//     }
// }
// let c = [1, 3, 4]
// let b = [1, 1, 1]
// compareTriplets(c, b)
// console.log(arr.toString());

let x = [1,28,20];
let y = [1, 16, 8];
let alice = 0;
let bob = 0;
for (let i = 0; i <= 2; i++){
    console.log(x[i],y[i]);
    if (x[i] > y[i]) {
        alice ++;
    } else if (x[i] < y[i]) {
        bob++;
    } else {
        console.log("0");
    }
}
let result = [alice, bob];

console.log(result);

// Problem 3
    