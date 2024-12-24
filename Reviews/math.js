// imperative approach
// n = 3;
// if(n == 0){
//   y = 0
// }else{
//   x = 0
//   y = 1
//   for(let i = 1; i<n;i++){
//     z  = x+y;
//     x = y;
//     y = z;
//   }
// }
// console.log("Answer :",y);

 
// declarative apporach
function iterative_fibo_index(n, x = 0, y = 1) {
  return n == 0 ? y : (iterative_fibo_index(n - 1, y, x + y));
}

let fibo_series = [];
fibo_series.push(iterative_fibo_index(0))
fibo_series.push(iterative_fibo_index(1))
fibo_series.push(iterative_fibo_index(2))
fibo_series.push(iterative_fibo_index(3))
fibo_series.push(iterative_fibo_index(4))
fibo_series.push(iterative_fibo_index(5))

console.log("Answer :", fibo_series);


