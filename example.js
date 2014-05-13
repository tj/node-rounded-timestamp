
var timestamp = require('./');
var ms = require('ms');

console.log(timestamp.second());
console.log(timestamp.minute());
console.log(timestamp.hour());
console.log(timestamp.day());

console.log();
var date = new Date - ms('1d');
console.log(timestamp.second(date));
console.log(timestamp.minute(date));
console.log(timestamp.hour(date));
console.log(timestamp.day(date));