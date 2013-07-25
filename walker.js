var fs = require('fs');

var walk = function(dir, callback, excludes) {
    excludes  = excludes || [];

    // create a level counter
    arguments.callee.level = ++arguments.callee.level || 0;
    var level = arguments.callee.level;

    // filter out excluded dirs
    for(var i=excludes.length; i--;) {
        if (dir.indexOf(excludes[i]) > -1) {
            return;
        }
    };

    fs.readdir(dir, function(err, files) {

        var isDir = fs.lstatSync(dir).isDirectory();

        // apply callback
        callback(dir, files, level);
        files.forEach(function(file) {
            // remove last slash
            file = dir.replace(/\/$/, '') + '/' + file;

            var isDir = fs.statSync(file).isDirectory();

            if (isDir) {
                walk(file, callback, excludes);
            }
        });
    });
}

module.exports = walk;