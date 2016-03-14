'use strict';
var isFunction = require('lodash/isFunction');
var isUndefined = require('lodash/isUndefined');

module.exports = function match(val, obj, def) {
	var ref = obj[val];

	if (isUndefined(ref)) {
		return isFunction(def) ? def(val) : def;
	}

	return isFunction(ref) ? ref(val) : ref;
};
