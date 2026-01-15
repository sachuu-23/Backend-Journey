const EventEmitter = require('events');

const newEvent = new EventEmitter();

newEvent.on('FirstRegisteredEvent',(id) =>{
    console.log(`My number is :${id}`);
})
newEvent.emit('FirstRegisteredEvent',100);