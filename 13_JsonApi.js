var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
    req.setEncoding('utf8');
    var urlParse = url.parse(req.url, true);
    var date = new Date(urlParse.query.iso);
    var result;

    if (urlParse.pathname == "/api/parsetime") {
        result = isoDate(date);
    } else if (urlParse.pathname == "/api/unixtime") {
        result = unixtime(date);
    }

    if (result) {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404, { 'content-type': 'application/json' });
        res.end('\n');
    }
});

function isoDate(d) {
    return {
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds()
    };
}

function unixtime(d) {
    return {
        unixtime: Math.floor(d)
    };
}

server.listen(port, function () {
    console.log("listening at port " + port);
});