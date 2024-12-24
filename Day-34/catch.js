// Not Catch
Promise.resolve(100)
        .then(x=>x+1)
        .catch(x=>x+2)
        .then(console.log)

// Catch
Promise.reject(100)
        .then(x=>x+1)
        .catch(x=>x+2)
        .then(console.log)


// Catch
Promise.resolve(100)
        .then(x=>
            {
                if(x==100)
                    {
                        throw new Error(x + 500)
                    }
                    else{
                      return x+100;   
                    }
            }
        )
        .catch(x=>x+2)
        .then(console.log)

// catch - one step over
Promise.reject(100)
        .then(x=>
            {
                if(x==100)
                    {
                        throw new Error(x + 500)
                    }
                    else{
                      return x+100;   
                    }
            }
        )
        .catch(x=>x+2)
        .then(console.log)
