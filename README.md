# Switch-match
[![NPM version](http://img.shields.io/npm/v/switch-match.svg)](https://www.npmjs.org/package/switch-match)
[![Travis Build Status](https://travis-ci.org/canvaskisa/switch-match.svg)](https://travis-ci.org/canvaskisa/switch-match)
[![Coverage Status](https://coveralls.io/repos/github/canvaskisa/switch-match/badge.svg?branch=master)](https://coveralls.io/github/canvaskisa/switch-match?branch=master)
[![Dependencies Status](https://david-dm.org/canvaskisa/switch-match.svg)](https://david-dm.org/canvaskisa/switch-match)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> :flashlight: Better object matching.

## Installation
```console
$ npm i -S switch-match
```

## Usage
Pass the `value` to match as the fisrt argument and the `object` to match as the second argument. Also you need to provide `_` default value, it will be returned if nothing else matched. Is you provide a `function` as a value, it will be called with matched `key` and it's result will be returned.
```js
var match = require('switch-match');

match('x', {
  x: 2,
  y: 1,
  _: 0
}); // => 2

match('none', {
  x: 2,
  y: 1,
  _: 0
}); // => 0

match('none-without-default', {
  x: 2,
  y: 1
}); // Error: 'Switch-match: default `_` key was called, but was not provided'

match('fn', {
  fn: function(val) {
    return val;
  },
  y: 1,
  _: 0
}); // => 'fn', function's return value
```

Personally, i wrote this module for usage with `redux` and `es6`, it fits pretty nice, but you can use it wherever you want to:
```js
export default (state = Immutable.Map, action) => match(action.type, {
  [FETCH_POSTS]: () => state.merge({posts: action.posts}),
  [OPEN_POPUP]: () => state.set('isPopupOpen', true),
  _: state
});
```

## Related
- [better-switch](https://github.com/lgraubner/better-switch)
- [rust-match](https://github.com/zackify/match)

## License
MIT © [Aleksandr Yakunichev](https://github.com/canvaskisa)
