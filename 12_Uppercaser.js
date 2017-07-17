var http = require('http');
var map = require('through2-map');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
    req.setEncoding('utf8');
    if(req.method !== 'POST')
        return res.end('Accepted POST only');
    req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase();
     })).pipe(res);
});

server.listen(port, function () {
    console.log("listening at port " + port);
});