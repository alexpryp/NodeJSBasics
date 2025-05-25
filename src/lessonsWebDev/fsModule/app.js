const fs = require('fs');
const path = require('path'); 

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