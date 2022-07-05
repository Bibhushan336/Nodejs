const EventEmitter = require("events")
const event = new EventEmitter();


event.on('sayMyName', () => {
    console.log("your name is dragon")
})
event.on('sayMyName', () => {
    console.log("your name is dragondonn")
})
event.on('sayMyName', () => {
    console.log("your name is kingkong")
})

event.emit("sayMyName");