'use strict';
var assert = require('assert');
var randomWord = require('./index');

describe('random-words-of-length', function() {
	describe('should return words exactly as long as passed number', function () {
	  it ('2', function () {
	    var i = 200;
	    while (--i) {
	      assert.equal(randomWord(2).length, 2);
	    }
	  });
	  var j = 2;
	  var len = randomWord.maxLen;
	  while (++j <= len) {
	    (function (){
	      var k = j;
				if(randomWord.hasWordsOfLength(k)) {
					it ('' + k, function () {
		        var i = 200;
		        while (--i) {
		          assert.equal(randomWord(k).length, k);
		        }
		      });
				}
	    }());
	  }
	});

	describe('should throw errors', function() {
		it('if ask for lengths greater than the max', function() {
			assert.throws(function(){
				randomWord(randomWord.maxLen + 1);
			});
		});

		describe('if ask for length that is reported to not have any words', function() {
			var j = 2;
		  var len = randomWord.maxLen;
		  while (++j <= len) {
		    (function (){
		      var k = j;
					if(!randomWord.hasWordsOfLength(k)) {
						it ('' + k, function () {
							assert.throws(function(){
								randomWord(k);
							});
			      });
					}
		    }());
		  }

		});
	});
});
