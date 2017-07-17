var http = require("http");
var urls = process.argv;
urls.splice(0, 2);
var count = urls.length;
var result = Array(count).fill("");
for (var i = 0; i < urls.length; i++) {
    getAtIndex(i);
}

function getAtIndex(i){
    http.get(urls[i], function (res) {
        res.setEncoding('utf8');
        var body = '';
        res.on("data", function (chunk) {
            body += chunk;
        });
        res.on("end", function () {
            result[i] = body;
            count--;
            if (count == 0) {
                printResult(result);
            }
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
}

function printResult(result){
    result.forEach(function(element) {
        console.log(element);
    }, this);
}
