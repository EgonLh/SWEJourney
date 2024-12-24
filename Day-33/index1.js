// Promise.reject(100)
//     .then(data => console.log("Success",data),(err)=>(console.log("error :",err),Promise.reject(2)))
//     .then(x=>x+1 , x=>x* 2)
//     .then(console.log)


// Promise.resolve(111)
//         .then(data =>{
//             if(data==100)
//                 {
//                     throw new Error("Sth is wrong ")
//                 }else{
//                     return Promise.reject(data+1);
//                 }
//         })
//         .catch(data => data + 20)
//         .then(data => console.log("Data ",data),(err) => console.log("Error",err))


// Promise.resolve(undefined)
//         .then(data => data.toUpperCase())
//         .then(console.log)

Promise.resolve(100)
        .then(x=>Promise.resolve(Promise.resolve(x+2)))
        .then(console.log)