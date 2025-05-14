const dotenv = require('dotenv');
dotenv.config();

console.log(process.pid);

//console.log(process.env);
console.log(process.env.PORT);
console.log(process.env.NODE_ENV);

// process arguments
console.log(process.argv);

// if( Math.random() > 0.5 ) {
//     while (true) {}
// } else {
//     console.log("Program execution completed");
//     process.exit();
// }
