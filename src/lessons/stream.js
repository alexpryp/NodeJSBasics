// Streams:
// Readable - read
// Writable - write
// Duplex - read + write
// Transform - same as duplex but can change data as it is read

const fs = require('fs');
const path = require('path');

// // fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
// //     if (err) {
// //         throw err;
// //     }
// //     console.log(data);
// // })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test2.txt'));

// // One chunk = 64kB
// stream.on('data', (chunk) => {
//     console.log(chunk);
// })
// stream.on('end', () => console.log('Finished reading'));
// stream.on('open', () => console.log('Started reading'));
// stream.on('error', (e) => console.log(e));


// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test3.txt'));
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n');
// }
// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on('error');


// http.createServer((req, res) => {
//     //req - redable stream
//     //res - writable stream
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test2.txt'))
//     stream.pipe(res);
// })