const fs = require('fs');
const path = require('path'); 

// // First variant without promisses
fs.readFile(path.resolve(__dirname, 'test.txt'), 'utf8', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(data);

  fs.mkdir(path.resolve(__dirname, 'files'), (error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log('Folder was created successfully');

    fs.writeFile(
      path.resolve(__dirname, 'files', 'test2.txt'), 
      `${data} New text`, 
      (error) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log('File was written successfully');
      }
    );
  });
});



// // // Second variant with native promisses
// // function to wrap fs.readFile in a promise
// function readFilePromise(filePath, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, encoding, (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// // function to wrap fs.mkdir in a promise
// function mkdirPromise(dirPath) {
//   return new Promise((resolve, reject) => {
//     fs.mkdir(dirPath, (error) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve();
//       }
//     });
//   });
// }




// // // function to wrap fs.writeFile in a promise
// function writeFilePromise(filePath, data) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filePath, data, (error) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve();
//       }
//     });
//   });
// }

// // Using chain of promises
// readFilePromise(path.resolve(__dirname, 'test.txt'), 'utf8')
//   .then(data => {
//     console.log(data);
    
//     return mkdirPromise(path.resolve(__dirname, 'files'))
//       .then(() => {
//         console.log('Folder was created successfully');
//         return data; // we pass the data further along the chain
//       });
//   })
//   .then(data => {
//     return writeFilePromise(
//       path.resolve(__dirname, 'files', 'test2.txt'), 
//       `${data} New text`
//     );
//   })
//   .then(() => {
//     console.log('File was written successfully');
//   })
//   .catch(error => {
//     console.log(error);
//   });


// // // Third variant with promises
// // const fs = require('fs').promises;

// let fileData;

// fs.readFile(path.resolve(__dirname, 'test.txt'), 'utf8')
//     .then(data => {
//       console.log(data);
//       fileData = data;
//       return fs.mkdir(path.resolve(__dirname, 'files'));
//     })
//     .then(() => {
//       console.log('Folder was created successfully');
//       return fs.writeFile(
//         path.resolve(__dirname, 'files', 'test2.txt'), 
//         `${fileData} New text`
//       );
//     })
//     .then(() => {
//       console.log('File was written successfully');
//     })
//     .catch(error => {
//       console.log(error);
//     });



setTimeout(() => {
  if (fs.existsSync(path.resolve(__dirname, 'files', 'test2.txt'))) {
    fs.unlink(path.resolve(__dirname, 'files', 'test2.txt'), (error) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log('File was deleted successfully');
    });
  }
}, 5000);

setTimeout(() => {
  if (fs.existsSync(path.resolve(__dirname, 'files'))) {
    fs.rmdir(path.resolve(__dirname, 'files'), (error) => {
        if (error) {
            console.log(error);
            return;
        } 
        console.log('Folder was deleted successfully');
    });
  }
}, 8000);

console.log('Just test!');