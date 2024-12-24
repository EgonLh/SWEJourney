console.log('Hello');
process.on("message",(request)=>{
    console.log(request);
    process.send({
        data:request.data.toUpperCase()
    })
})