function mult_return(val){
    if(isNaN(val))
    return [val,new Error('A is a Number')]
    else
    return [val,new Error('A is not a number')]
}

let [value,ms] = mult_return('1');
console.log('value ,', value);
console.log('message ,',ms);