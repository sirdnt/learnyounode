var fs = require("fs");
var path = require("path");
module.exports = function filter(directory, ext, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) return callback(err);

        var data = [];
        list.forEach(function (element) {
            if (path.extname(element) == ("." + ext)) {
                data.push(element);
            }
        }, this);
        return callback(err, data);
    });
}