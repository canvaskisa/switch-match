'use strict';

module.exports = function match(val, obj, def) {
	var ref = obj[val];

	if (typeof ref === 'undefined') {
		return typeof def === 'function' ? def(val) : def;
	}

	return typeof ref === 'function' ? ref(val) : ref;
};
