const fs = require('fs');
const http = require('http');

http.createServer((request,response)=>{

    const readStream = fs.createReadStream('./static/example.json');
    response.writeHead(200,{'Content-Type':'application/json'});
    readStream.pipe(response);
     
}).listen(3000);