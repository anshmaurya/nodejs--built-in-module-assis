
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();


const subscribeMessage = (channel) =>{
    console.log(`Thanks for Subscribing to ${channel}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);
eventEmitter.emit("subscribe", "College Wallah");