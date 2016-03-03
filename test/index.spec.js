import test from 'ava';
import match, {errorMessage} from '../index.js';
import {spy} from 'sinon';

test('Must match and return object\'s key', t => {
	const expected = [1];
	const actual = match('value', {
		a: 'test',
		value: expected
	});

	t.is(actual, expected, '');
});

test('Must return default value if nothing matched', t => {
	const expected = {a: 1};
	const actual = match('nothing', {
		value: 1,
		_: expected
	});

	t.is(actual, expected);
});

test('Must throw error if nothing matched with no default value', t => {
	t.throws(() => match('nothing', {
		a: 'a',
		b: 'b'
	}), errorMessage);
});

test('Must call matched value if it is a function', t => {
	const fn = spy();
	match('test', {test: fn});
	t.is(fn.calledOnce, true);
});

test('Must call default value if nothing matched and it is a function', t => {
	const fn = spy();
	match('nothing', {_: fn});
	t.is(fn.calledOnce, true);
});
