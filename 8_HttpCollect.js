var http = require("http");
var url = process.argv[2];
http.get(url, function (res) {
    res.setEncoding('utf8');
    var body = '';
    res.on("data", function (chunk) {
        body+=chunk;
    });
    res.on("end",function(){
        console.log(body.length);
        console.log(body);
    });
}).on('error', function (e) {
    console.log("Got error: " + e.message);
});