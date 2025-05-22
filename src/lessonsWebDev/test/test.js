// const sum = 1 + 5;
// console.log(sum);
// console.log('Hello world!');

//-----------------------------------------------


const userName = 'Yauhen';
const sayHi = (userName) => `Hello, my name is ${userName}`;
// console.log(sayHi(userName));

//-----------------------------------------------


// GLobal objects

//console.log(global);

// setTimeout(() => {
//     console.log('Hello!');
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// console.log(process.env);

// command line's arguments
//console.log(process.argv);
//console.log(`Hello, ${process.argv[2]}`);

// const url = new URL('https://webDev.com/path/name#test');
// console.log(url.hostname);
// console.log(url.href);
// console.log(url.pathname);
// console.log(url.hash);

module.exports = {
    userName,
    sayHi
};