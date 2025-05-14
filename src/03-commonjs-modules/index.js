const exportedObject = require('./multiple-exports');
const { MYNAME, MYHOBBIES, MYFAVORITENUMBER } = exportedObject;
const { MYNAME: MYOTHERNAME, MYFRIENDSNAME} = require('./export-and-import');
const greeting = require('./single-exports');

//console.log(arguments.callee.toString());
//console.log(module);
console.log(__filename);
console.log(__dirname);

console.log(exportedObject);

console.log(MYNAME);
console.log(MYHOBBIES);
console.log(MYFAVORITENUMBER);

greeting(MYNAME);

console.log(MYOTHERNAME);
console.log(MYFRIENDSNAME);
