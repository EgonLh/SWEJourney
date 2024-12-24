function delay(x){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("Code Excuted another 3 seonds");
          resolve(x + 200);
        }, 3000);
      });
}
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Code Executed After 3 reseond");
    resolve(100);
  }, 3000);
})
  .then((x) => x + 1)
  .then(delay)  
  .then(console.log);

console.log("Done");
