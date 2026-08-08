// This program will give the stat of a file using the callbacks
const fs = require("fs");

function getFileStats(path, callback) {
    if (!path)
        return callback("File path not defiend", null);

    fs.readFile(path, 'utf-8', (err, data) => {
        if (err)
            return callback(err, null);

        if (!data)
            return callback("No data to this file", null)

        let i = 0;
        let lines = 0;
        let words = 0;

        while (i < data.length) {
            if (data.charAt(i) == '\n') {
                lines++;
            }
            if (data.charAt(i) == ' ') {
                words++;
            }
            i++;
        }

        callback(null, { size: data.length, lines: lines, words: words })
    })
}

getFileStats("./data/text-1.txt", (err, result) => {
    if (err)
        return console.log("ERROR: ", err)

    console.log(`Size: ${result.size} \nLines: ${result.lines} \nWords: ${result.words}`)
});