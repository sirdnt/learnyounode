var dir = process.argv[2];
var ext = process.argv[3];
var fm = require("./FilterModule.js");
fm(dir, ext, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        data.forEach(function(element) {
            console.log(element);
        }, this);
    }
});

