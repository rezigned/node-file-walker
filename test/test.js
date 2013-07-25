var walker = require('../file-walker.js'),
	should = require('should');
	assert = require("assert");

describe('file walker', function(){
	it('should return list of files/dirs in ./test directory', function(){

		walker('./test', function(dir, files, level) {

			if (level == 0) {
				dir.should.equal('./test');
				files.should.eql(['dummy', 'test.js']);		
			}

			// level 1
			else {
				dir.should.equal('./test/dummy');
				files.should.eql(['a.js', 'b.js']);
			}
		});
	})

	it('should exclude directories, files specified in 3rd argument', function(){
		walker('./test', function(dir, files) {

			dir.should.equal('./test');
			files.should.eql(['dummy', 'test.js']);

		}, ['./test/dummy']);
	});
})
