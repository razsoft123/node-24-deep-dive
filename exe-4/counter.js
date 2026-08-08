// To show the module caching in the nodeJS
console.log("Counter.js Module get executed")

let count = 0;

module.exports = {
    increment: () => {
        count++;
    },

    getCount: () => {
        return count;
    }
};