// The file shows how to make a event driven API using the EventEmitter system of the nodeJS
// An API to read a file and generate following event start, reading, complete, error
const EventsEmitter = require("node:events");
const FS = require("node:fs");

const eventEmitter = new EventsEmitter();
let fileData = ""

function getFileStat(path) {

    eventEmitter.emit("start", path);
    if (!path)
        return eventEmitter.emit("error", "Path not provided");

    eventEmitter.emit('reading', path, 'utf-8')
    FS.readFile(path, 'utf-8', (err, data) => {
        if (err)
            return eventEmitter.emit("error", err)

        fileData = data;
        eventEmitter.emit('complete')
    })
}

eventEmitter.on('start', (path) => {
    console.log("File reading started ", path)
})

eventEmitter.on("reading", (path, format) => {
    console.log("File reading in progress", path, "format: ", format)
})

eventEmitter.on("complete", () => {
    console.log("File reading completed")

    let line = 0;
    let words = 0;
    let i = 0;

    while (i < fileData.length) {
        if (fileData.charAt(i) == " ")
            words++;
        if (fileData.charAt(i) === '\n')
            line++;

        i++;
    }

    console.log(`Size: ${fileData.length} \nLines: ${line} \nWords: ${words}`)
})

eventEmitter.on("error", (err) => {
    console.log("There is an error while reading the file", err);
})

getFileStat("./data/text-2.txt22");