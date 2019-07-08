const _ = require('lodash');
const assert = require('assert');
const validate = require('./validate');

function test(value, message = '') {
  assert(value, message);
}

test.isArray = value => validate(value, _.isArray, 'Array');
test.isBoolean = value => validate(value, _.isBoolean, 'Boolean');
test.isDate = value => validate(value, _.isDate, 'Date');
test.isDefined = value => validate(value);
test.isError = value => validate(value, _.isError, 'Error');
test.isFunction = value => validate(value, _.isFunction, 'Function');
test.isMap = value => validate(value, _.isMap, 'Map');
test.isNull = value => validate(value, _.isNull, 'Null');
test.isNumber = value => validate(value, _.isNumber, 'Number');
test.isObject = value => validate(value, v => !_.isArray(v) && !_.isFunction(v) && _.isObject(v), 'Object');
test.isPromise = value => validate(value, v => !!v.then && !!v.catch && !_.isArray(v), 'Promise');
test.isSet = value => validate(value, _.isSet, 'Set');
test.isString = value => validate(value, _.isString, 'String');
test.isSymbol = value => validate(value, _.isSymbol, 'Symbol');
test.isWeakMap = value => validate(value, _.isWeakMap, 'WeakMap');
test.isWeakSet = value => validate(value, _.isWeakSet, 'WeakSet');

module.exports = test;
