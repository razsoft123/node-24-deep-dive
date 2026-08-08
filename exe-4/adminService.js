const config = require("./config")

function showStats() {
    console.log("Request Count: ", config.requestCount)
}

module.exports = {
    showStats
}