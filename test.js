'use strict';
var assert = require('assert');
var randomWord = require('./index');

it('should return a random word', function () {
	assert(randomWord().length > 1);
});

describe ('should respect length', function () {
  it (2, function () {
    var i = 200;
    while (--i) {
      assert.equal(randomWord(2).length, 2);
    }
  });
  var j = 2;
  var len = 30;
  while (++j < len) {
    (function (){
      var k = j;
      it (k, function () {
        var i = 200;
        while (--i) {
          assert(randomWord(k).length <= k);
        }
      });
    }());
  }

});

it ('should ignore a non-number', function () {
    var i = 200;
    while (--i) {
      assert(randomWord('foo').length > 1);
    }
  });