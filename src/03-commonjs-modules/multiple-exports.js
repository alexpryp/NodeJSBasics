const MYNAME = 'Bogdan';
const MYHOBBIES = ['swimming', 'boxing', 'cycling'];
const MYFAVORITENUMBER = 77;

console.log('Text from the multiple-exports CommonJS module');

module.exports.MYNAME = MYNAME;
module.exports.MYHOBBIES = MYHOBBIES;
module.exports.MYFAVORITENUMBER = MYFAVORITENUMBER;
