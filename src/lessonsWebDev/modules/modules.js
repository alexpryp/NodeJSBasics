const os = require('os');
const {userName: user, sayHi} = require('../test/test.js');

const name = 'Tommy';

console.log(user);
console.log(sayHi(name));

console.log(os.platform(), os.release());

module.exports = name;