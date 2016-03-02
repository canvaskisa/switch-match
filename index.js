'use strict';
var isFunction = require('lodash/isFunction');
var isUndefined = require('lodash/isUndefined');
var DEFAULT_SYM = '_';

module.exports = function match(value, objectToMatch) {
	var ref = objectToMatch[value];

	if (isUndefined(ref)) {
		var def = objectToMatch[DEFAULT_SYM];

		if (isUndefined(def)) {
			throw new Error('Switch-match: default `_` key was called, but was not provided');
		} else {
			return isFunction(def) ? def(value) : def;
		}
	} else {
		return isFunction(ref) ? ref(value) : ref;
	}
};
