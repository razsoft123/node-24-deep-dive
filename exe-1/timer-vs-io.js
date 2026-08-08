const fs = require("fs");



fs.readFile(__filename, () => {
    console.log("File read IO callback")
})

fs.readFile("./../data/text-1.txt", () => {
    console.log("File read IO callback 2")
})

setImmediate(() => {
    console.log("Check queue callback")
})

setTimeout(() => {
    console.log("Set timeout callback")
}, 0)

process.nextTick(() => {
    console.log("Process next tick callback");
})

Promise.resolve().then(() => {
    console.log("Promise resolve callback")
})

let i = -1000;
while (i < 5) {
    ++i;
}

// For the 0ms timeout which is actully 1ms timeout with the IO callback the execution order is not gaurnteed. 