# Switch-match
[![NPM version](http://img.shields.io/npm/v/switch-match.svg)](https://www.npmjs.org/package/switch-match)
[![Travis Build Status](https://travis-ci.org/canvaskisa/switch-match.svg)](https://travis-ci.org/canvaskisa/switch-match)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Better object matching.

## Installation
```console
$ npm i -S switch-match
```

## Usage
>```js
match(val: string, obj: object, def: any): any
```

```js
var match = require('switch-match');

match('x', {
  x: 2,
  y: 1
}, 100); // => 2

match('none', {
  x: 2,
  y: 1
}, 0); // => 0

match('none-without-default', {
  x: 2,
  y: 1
}); // Undefined

match('fn', {
  fn: function(val) {
    return val;
  },
  y: 1
}); // => 'fn', function's return value
```

Personally, i wrote this module for usage with `redux` and `es6`, it fits pretty nice, but you can use it wherever you want to:
```js
export default (state = {}, action) => match(action.type, {
  [FETCH_POSTS]: () => ({...state, posts: action.posts})
}, state);
```

## Related
- [better-switch](https://github.com/lgraubner/better-switch)
- [rust-match](https://github.com/zackify/match)

## License
MIT © [Aleksandr Yakunichev](https://github.com/canvaskisa)
