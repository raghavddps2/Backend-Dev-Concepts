//Creating an http server.

const http = require('http')
const server = http.createServer((request,response)=>{
    if(request.url === '/'){
        response.write("Hello world from nodeJs");
        response.end();
    }
    else{
        response.write("404 Not found");
        response.send();
    }
});

server.listen(3000);

