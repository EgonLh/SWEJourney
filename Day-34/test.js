let promise = fetch("https://jsonplaceholder.typicode.com/todos/3");

console.log(promise);

Promise.reject(promise)
    .then(data => data.json())
    .catch(data => data + "fail")
    .then(console.log)