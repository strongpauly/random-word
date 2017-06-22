'use strict';
var words = require('word-list-json');
var uniqueRandom = require('unique-random');
var uniqueRandoms = {
};
var maxLen = 0;
var lastIndex = 0;
Object.keys(words.lengths).forEach(function (len) {
  if (Number(len) > maxLen) {
    maxLen = len;
  }
  var wordsIndex = words.lengths[len] - 1;
  uniqueRandoms[len] = uniqueRandom(lastIndex, wordsIndex);
  lastIndex = wordsIndex + 1;
});
function randomWord(len) {
  if(uniqueRandoms[len] === undefined) {
    throw new Error('No words of ' + len + ' length exist');
  }
  return words[uniqueRandoms[len]()];
}
randomWord.maxLen = maxLen;
randomWord.uniqueRandoms = uniqueRandoms;
randomWord.hasWordsOfLength = function(length) { return uniqueRandoms[length] !== undefined;};
module.exports = randomWord;
