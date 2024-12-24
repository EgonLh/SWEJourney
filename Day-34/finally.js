// Promise.resolve(100)
//         .then(x => Promise.reject(x+1))
//         .finally(x=>{
//             console.log("Always :",x);
//             return 5;
//         })
//         .finally(x=>{
//             console.log("Always 2 :",x);
//         })
//         .catch(x=>x+100)
//         .then(console.log)

Promise.reject(100)
        .then(x => Promise.resolve(x+1))
        .finally(x=>{
            console.log("Always :",x);
            return 5;
        })
        .finally(x=>{
            console.log("Always 2 :",x);
        })
        .catch(x=>x+100)
        .then(console.log)