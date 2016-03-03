'use strict';
var isFunction = require('lodash/isFunction');
var isUndefined = require('lodash/isUndefined');
var __DEFAULT_SYM__ = '_';
var errorMessage = 'Switch-match: default `' + __DEFAULT_SYM__ + '` key was called, but was not provided';

exports.errorMessage = errorMessage;

module.exports = function match(value, objectToMatch) {
	var ref = objectToMatch[value];

	if (isUndefined(ref)) {
		var def = objectToMatch[__DEFAULT_SYM__];

		if (isUndefined(def)) {
			throw new Error(errorMessage);
		} else {
			return isFunction(def) ? def(value) : def;
		}
	} else {
		return isFunction(ref) ? ref(value) : ref;
	}
};
