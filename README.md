## A Simple file/directory traversal module

[![Build Status](https://travis-ci.org/rezigned/node-file-walker.png)](https://travis-ci.org/rezigned/node-file-walker)

### Installation

```
npm install file-walker
```

### Callback arguments

* files - an array of files/directories in current directory e.g. `['dummy', 'test.js']`
* dir - directory name e.g. `'./test'`
* level - Current directory level starting from `0`

### Example usage

Assume we have the following directory structure

```
./test/
  +- a.js
  +- b/
     +- c.js
     +- d.js
```

```js
var walk = require('file-walker');

walk('./directory', function(files, dir, level) {
    // 1st iteration, level = 0, dir = './test', files = ['a.js', 'b']
    // 2nd iteration, level = 1, dir = './test/b', files = ['c.js', 'd.js']
	// your logic
});
```
