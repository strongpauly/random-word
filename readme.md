# random-word-by-length

> Returns a random English word from the [Letterpress Word List](https://github.com/atebits/Words/blob/master/Words/en.txt) by length.


## Install

```bash
$ npm install --save random-word-of-length
```


## Usage

```js
var randomWord = require('random-word-of-length');

randomWord(6);
//=> boride
```

## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global random-word-of-length
```

### Usage

```bash

$ random-word-by-length -l 4
goor
```

## License
[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
