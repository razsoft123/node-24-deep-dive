const math = require("./math");
const logger = require("./logger");
const userService = require("./userService");
const adminService = require("./adminService");

// Indivisual 
console.log("add ", math.add(5, 6));
console.log("sub ", math.sub(5, 6));

// Object 
logger.info("Application started");
logger.warn("Application warning");

// userService 
userService.handleRequestCount();
userService.handleRequestCount();
userService.handleRequestCount();

// Admin service 
adminService.showStats();

console.log("Config object: ", require("./config") === require("./config"))

// Require counter to see the effect
const counter1 = require("./counter")
const counter2 = require("./counter")

counter1.increment();
console.log(counter2.getCount())