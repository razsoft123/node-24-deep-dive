// This is the program to demonstrate the nodeJS fundamental of event loop. 
console.log("First output");
setTimeout(() => {
    console.log("Last output")
}, 0)

setImmediate(() => {
    console.log("Before timeout")
})

Promise.resolve().then(() => {
    console.log("After immediate")
})

queueMicrotask(() => {
    console.log("Before promise")
})

console.log("Second output")