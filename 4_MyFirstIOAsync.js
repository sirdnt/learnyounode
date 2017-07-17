var fs = require("fs");
fs.readFile(process.argv[2],function (err, data) {
        var arr = data.toString().split('\n');
        console.log(arr.length>0?arr.length-1:0);
});