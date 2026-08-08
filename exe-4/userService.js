const config = require("./config");

function handleRequestCount() {
    config.requestCount++;
}

module.exports = {
    handleRequestCount
}