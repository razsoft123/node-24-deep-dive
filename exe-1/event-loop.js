// This is the program to demonstrate the nodeJS fundamental of event loop. 
console.log("First output");
setTimeout(() => {
    console.log("Fifth/sixth: timers")
}, 0)

process.nextTick(() => {
    console.log("Third: beform the promise")
})

setImmediate(() => {
    console.log("fifth/sixth: check queue")
})

Promise.resolve().then(() => {
    console.log("Forth: Microtask queue promises")
})

queueMicrotask(() => {
    console.log("Third: micro task queue")
})

console.log("Second output")