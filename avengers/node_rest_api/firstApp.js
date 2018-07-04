const http = require('http');
const fs=require('fs');
const dt=require('./firstModule');

const hostname = '127.0.0.1';
const port = 8001;

const server = http.createServer((req, res) => {
  fs.readFile("firstHtml.html",function(err, data){
    if(err) throw err;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});