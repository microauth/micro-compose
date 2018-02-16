# micro-compose

> Higher-order `compose` function

[![Build Status](https://travis-ci.org/microauth/micro-compose.svg?branch=master)](https://travis-ci.org/microauth/micro-compose)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Greenkeeper badge](https://badges.greenkeeper.io/microauth/micro-compose.svg)](https://greenkeeper.io/)

`Compose` function from [micro-hoofs](https://github.com/KaleoSoftware/micro-hoofs) extracted into separate npm package and a bit modified.

### Install

```sh
npm install --save micro-compose
# or
yarn add micro-compose
```

### Usage

```js

import test from 'ava';
import compose from './../';

const first = fn => (arg1, arg2) => {
  return fn(arg1, arg2, 'third');
};

const second = fn => (...args) => {
  args.push('another one');
  return fn(...args);
};

test('should compose correct', async t => {
  const composed = compose(
    first,
    second
  )(async (...args) => {
    t.is(args.length, 4);
    t.is(args[0], 'first');
    t.is(args[1], 'second');
    t.is(args[2], 'third');
    t.is(args[3], 'another one');
  });

  await composed('first', 'second');
});

```
