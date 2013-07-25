## A Simple file/directory traversal module

[![Build Status](https://travis-ci.org/rezigned/node-file-walker.png)](https://travis-ci.org/rezigned/node-file-walker)

### Callback arguments

* files - an array of files/directories in current directory e.g. `['dummy', 'test.js']`
* dir - directory name e.g. `'./test'`
* level - Current directory level starting from `0`

### Example usage

```js
var walk = require('simple-walker');

walk('./directory', function(files, dir, level) {
	// your logic
});
```
