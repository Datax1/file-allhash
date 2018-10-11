# file-allhash

> Simply return an sum of a given file. It's can use `md5`, `sha1`, `sha256`, `sha512`, `mode and more..`
If using async version (by including callback), it will stream;.

### Installation

```
$ npm install file-allhash
```

__Test:__

```
$ npm test
```

__hash list compatibility:__
You can list all hash
```
$ npm run-script hashlist
```
It's dependent on the available algorithms supported by the version of OpenSSL on the platform.
src: (crypto.createHash)[https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options]

### API

__file-allhash(path,hashprotocol, [callback])__

```javascript
var fileallhash = require('file-allhash');

// sync (no callback)

fileallhash('./path/to/a_file'); // '345eec8796c03e90b9185e4ae3fc12c1e8ebafa540f7c7821fb5da7a54edc704'

// sync (no callback) & SET one hash
fileallhash('./path/to/a_file','sha256'); // '345eec8796c03e90b9185e4ae3fc12c1e8ebafa540f7c7821fb5da7a54edc704'

// async/streamed (if using callback)

fileallhash('./path/to/a_file', function (error, sum) {
  if (error) return console.log(error);
  console.log(sum) // '345eec8796c03e90b9185e4ae3fc12c1e8ebafa540f7c7821fb5da7a54edc704'
})

// async/streamed (if using callback) & SET one hash

fileallhash('./path/to/a_file','sha256', function (error, sum) {
  if (error) return console.log(error);
  console.log(sum) // '345eec8796c03e90b9185e4ae3fc12c1e8ebafa540f7c7821fb5da7a54edc704'
})
```

### License

MIT  

### Thanks
fileallhash is based on [sha256-file](https://github.com/so-ta/sha256-file)
sha256-file is based on [sha1-file](https://github.com/roryrjb/sha1-file)