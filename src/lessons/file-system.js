const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// //Synchronous method mkdirSync(), allowing to create folders
// fs.mkdirSync(path.resolve(__dirname, 'dir'));

// //Creating multiple nested folders
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true});


// console.log('START');
// //Asynchronous mkdirSync() method to create folders
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Folder is created')
// })

// console.log('END');


// //Asynchronous rmdir() method to delete folders
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
// });


//---------------------------------------------------------

//Write the transferred data to a file using writeFile()
//if such a file already exists with some data, then it will be overwritten
// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 qwerty 7 9 10', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('The file has been written');
// });


//Write the transferred data to a file using appendFile()
//if such a file already exists with some data, then the transferred data is added to it
// fs.appendFile(path.resolve(__dirname, 'test.txt'), '5 qwerty 7 9 10 asdf lkjm', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('The file has been written');
// });


//---------------------------------------------------------

//The writeFile() function can be wrapped in a custom promise
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if(err) {
                return reject(err.message);
            }
            resolve();
        });
    });
};

//The appendFile() function can also be wrapped in a custom promise
const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
            fs.appendFile(path, data, (err) => {
            if(err) {
                return reject(err.message);
            }
            resolve();
        });
    });
};

// Reading files using the readFile() function
// we wrap it in a self-written promise as well
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
            fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if(err) {
                return reject(err.message);
            }
            resolve(data);
        });
    });
};

// Deleting files using the rm() function
// we wrap it in a self-written promise as well
const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message);
        }
        resolve();
    }));
};

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data ')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123 '))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456 '))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '578 '))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('file was removed'));


// Pass a string through an environment variable and write it to a file
// read the file, count the number of words in the file
// and write them to a new file count.txt, then delete the first file
const text = process.env.TEXT || '';
writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `кол-во слов ${count}`))
    .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(() => removeFileAsync(path.resolve(__dirname, 'count.txt')));
