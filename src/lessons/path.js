const path = require('path');

//Glue the sections of the path
console.log(path.join('first', 'second', 'third'));
console.log(path.join(__dirname));
console.log(path.join(__filename));
console.log(path.join(__dirname, 'first', 'second', 'third'));
console.log(path.join(__dirname, '..', '..'));

//Path parsing
const fullpath = path.join(__dirname, 'first', 'second', 'third.js');
console.log('Parse parsing: ', path.parse(fullpath));
console.log('Divider in operations sistem: ', path.sep);
console.log('check for absolute path: ', path.isAbsolute(fullpath));
console.log('check for absolute path: ', path.isAbsolute('first/second'));
console.log('check for basename path: ', path.basename(fullpath));
console.log('check for extantion name path: ', path.extname(fullpath));


//---------------------------------------------------------

const siteURL = 'https://localhost:8080/users?id=5123';
const url = new URL(siteURL);
console.log(url);
