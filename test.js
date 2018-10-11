'use strict';

var crosshash = require('./index');
var assert = require('assert');
var filename = 'LICENSE';
var preCheckedSum = '085d1edf3804411c06df3f028cee202ae225b627bd1d23811eaf53600f130852';

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

var syncSum = crosshash(filename,'sha256',);

assert(syncSum === preCheckedSum);
console.log('sum = ' + syncSum);
console.log('Pass 2/4');

// errors

crosshash('does not exist', function (error, sum) {
  assert(error);
  assert(!sum)
});
