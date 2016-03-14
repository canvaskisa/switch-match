import test from 'ava';
import match from '../index.js';
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
		value: 1
	}, expected);

	t.is(actual, expected);
});

test('Must call matched value if it is a function', t => {
	const fn = spy();
	match('test', {test: fn});
	t.is(fn.calledOnce, true);
});

test('Must call default value if nothing matched and it is a function', t => {
	const fn = spy();
	match('nothing', {}, fn);
	t.is(fn.calledOnce, true);
});

test('Must return undefined if default matched with no value', t => {
	const expected = undefined;
	const actual = match('wat', {test: 1});
	t.is(actual, expected);
});
