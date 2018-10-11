'use strict';

var crosshash = require('./index');
var assert = require('assert');
var filename = 'LICENSE';
var preCheckedSum = '5a1030393737516897f8f1735123464ed8f5787fb8d3c21ccd80908fc16f7046';

crosshash(filename, function (error, sum) {
  console.log('sum = ' + sum);
  assert(error === null);
  assert(sum === preCheckedSum);
  console.log('Pass 3/4')
});

crosshash(filename,'sha256', function (error, sum) {
  console.log('sum = ' + sum);
  assert(error === null);
  assert(sum === preCheckedSum);
  console.log('Pass 4/4')
});

var syncSum = crosshash(filename);

assert(syncSum === preCheckedSum);
console.log('sum = ' + syncSum);
console.log('Pass 1/4');

var syncSum = crosshash(filename,'sha256');

assert(syncSum === preCheckedSum);
console.log('sum = ' + syncSum);
console.log('Pass 2/4');

// errors

crosshash('does not exist', function (error, sum) {
  assert(error);
  assert(!sum)
});
