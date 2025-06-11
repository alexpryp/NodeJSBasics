const os = require('os');
const { userName: user, sayHi } = require('./test');

console.log(user);

const name = 'Tommy';

console.log(sayHi(name));

console.log(os.platform());
console.log(os.release());

module.exports = name;
