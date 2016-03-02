# Switch-match
[![NPM version](http://img.shields.io/npm/v/switch-match.svg)](https://www.npmjs.org/package/switch-match)
[![Travis Build Status](https://travis-ci.org/canvaskisa/switch-match.svg)](https://travis-ci.org/canvaskisa/switch-match)
[![Coverage Status](https://coveralls.io/repos/github/canvaskisa/switch-match/badge.svg?branch=master)](https://coveralls.io/github/canvaskisa/switch-match?branch=master)
[![Dependencies Status](https://david-dm.org/canvaskisa/switch-match.svg)](https://david-dm.org/canvaskisa/switch-match)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![License](https://img.shields.io/github/license/canvaskisa/switch-match.svg)](LICENSE)

> Better object matching.

## Usage
```js
var match = require('match');

var a = match('value', {
	value: 1,
	_: 0
});

a === 1 // true, matches provided value

var b = match('nth', {
	value: 1,
	_: 0
});

b === 0 // true, matches default _ value

var c = match('fn', {
	fn: function(val) {
		return 1;
	},
	_: 0
});

c === 1 // true, calls function with matched value and returns it's result
```

## Related
- [better-switch](https://github.com/lgraubner/better-switch)
- [rust-match](https://github.com/zackify/match)

## License
MIT © [Aleksandr Yakunichev](https://github.com/canvaskisa)
