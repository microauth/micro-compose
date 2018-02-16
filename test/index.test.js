import test from 'ava';
import compose from './..';

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
