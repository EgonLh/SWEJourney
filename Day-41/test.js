const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start',(point)=>{
    console.log("Point :",point);
})
console.log("Before Emit");
eventEmitter.emit('start',{
    point : +100,
})

console.log("1");
console.log("2");
console.log("3");
console.log("5");
console.log("4");
console.log("13");
console.log("11");
console.log("21");
console.log("31");
console.log("11");


