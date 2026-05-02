const http = require('http');
const { Http2ServerRequest } = require('http2');

const server = http.createServer((req,res) =>{
    if(req.url ==='/'){
            res.write('Hello Programmers!');
            res.write('How are you doning?');
            res.end();
    }else if(req.url==='/about'){
        res.write('This is about us page!');
        res.end();
    }else{
        res.write('Not found!');
        res.end();
        
    }
});


server.listen(3000);

console.log('listening on part 3000');