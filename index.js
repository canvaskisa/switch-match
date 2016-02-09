'use strict';

module.exports = function match(value, objectToMatch) {
	return objectToMatch[value] ? objectToMatch[value](value) : objectToMatch._(value);
};
