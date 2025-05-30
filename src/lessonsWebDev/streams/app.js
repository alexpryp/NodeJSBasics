const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const readStream = fs.createReadStream(path.resolve(__dirname, 'docs', 'text.txt'));
const writeStream = fs.createWriteStream(path.resolve(__dirname, 'docs', 'new-text.txt'));
const compressStream = zlib.createGzip();

// // duplex stream
// readStream.on('data', (chunk) => {
//   writeStream.write('\n---CHUNK START---\n');
//   writeStream.write(chunk);
//   writeStream.write('\n---CHUNK END---\n');
// });

const handleError = () => {
  console.log('Error');
  readStream.destroy();
  writeStream.end('Finished with error...');
}

// pipe stream
readStream
  .on('error', handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleError);