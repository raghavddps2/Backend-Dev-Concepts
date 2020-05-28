const fs = require('fs');
const readStream = fs.createReadStream('./example.txt');
const writeStream = fs.createWriteStream('./example2.txt');

//This is how we are able to write chunk by chnk.
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
});