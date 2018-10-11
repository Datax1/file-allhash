'use strict';

var crypto = require('crypto');
var fs = require('fs');

module.exports = function (filename, option1 , option2) {
  var filename = filename;
  if(option1 && typeof option1 === 'function'){
      var callback = option1;
      var hashtype = 'sha256';
  }
  else if(option1 && typeof option1 === 'string'){
      var hashtype = option1;
      if(option2 && typeof option2 === 'function')
        var callback = option2;
  }
  else 
      var hashtype = 'sha256';

  var sum = crypto.createHash(hashtype);
  if (callback && typeof callback === 'function') {
    var fileStream = fs.createReadStream(filename);
    fileStream.on('error', function (err) {
      return callback(err, null)
    });
    fileStream.on('data', function (chunk) {
      try {
        sum.update(chunk)
      } catch (ex) {
        return callback(ex, null)
      }
    });
    fileStream.on('end', function () {
      return callback(null, sum.digest('hex'))
    })
  } else {
    sum.update(fs.readFileSync(filename));
    return sum.digest('hex')
  }
};
