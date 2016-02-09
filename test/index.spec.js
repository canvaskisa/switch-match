import test from 'ava';
import match from '../index.js';

test.cb('It matches objects key', t => {
	const value = 'test';
	match(value, {
		test: v => {
			t.same(v, value);
			t.end();
		}
	});
});

test.cb('It calls default value', t => {
	const value = 'test';
	match(value, {
		hello: v => console.log(v),
		_: v => {
			t.same(v, value);
			t.end();
		}
	});
});
