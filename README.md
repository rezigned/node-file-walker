## A Simple file/directory traversal module

[![Build Status](https://travis-ci.org/rezigned/node-file-walker.png)](https://travis-ci.org/rezigned/node-file-walker)

### Callback arguments

* files
* dir
* level

```js
var walk = require('simple-walker');

walk('./directory', function(files, dir) {

});
```
