Promise.reject(100)
    .then(data => {console.log("Success",data)})
    .catch(console.log)


Promise.resolve(110)
        .then(data=>{
            if(data == 100)
            {
                throw new Error("Error Occured : ")
            }
            else{
                return Promise.reject(data+10);
            }
        })
        .catch(data => data + 2)
        .then(console.log)

Promise.reject(undefined)
        .then(data => data + "Success")
        .catch(data => console.log("Error :",data))

Promise.resolve(100)
        .then(x=>Promise.reject(x+2))
        .catch(x=>x+ " Catch ")
        .then(console.log)

Promise.resolve(100)
        .then(x=>{
            throw new Error(x+2)
        })
        .catch(x=>x+ " Catch ")
        .then(console.log)