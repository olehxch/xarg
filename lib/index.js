const _ = require('lodash');
const assert = require('assert');
const validate = require('./validate');

function test(value, message = '') {
  assert(value, message);
}

test.isArguments = value => validate(value, _.isArguments, 'Arguments');
test.isArray = value => validate(value, _.isArray, 'Array');
test.isArrayBuffer = value => validate(value, _.isArrayBuffer, 'ArrayBuffer');
test.isBoolean = value => validate(value, _.isBoolean, 'Boolean');
test.isBuffer = value => validate(value, _.isBuffer, 'Buffer');
test.isDate = value => validate(value, _.isDate, 'Date');
test.isDefined = value => validate(value);
test.isEmpty = value => validate(value, _.isEmpty, 'empty', '');
test.isError = value => validate(value, _.isError, 'Error');
test.isFinite = value => validate(value, _.isFinite, 'Finite Number');
test.isFunction = value => validate(value, _.isFunction, 'Function');
test.isInteger = value => validate(value, _.isInteger, 'Integer');
test.isMap = value => validate(value, _.isMap, 'Map');
test.isNaN = value => validate(value, _.isNaN, 'NaN');
test.isNil = value => validate(value, _.isNil, 'Nil');
test.isNull = value => validate(value, _.isNull, 'Null');
test.isNumber = value => validate(value, _.isNumber, 'Number');
test.isObject = value => validate(value, v => !_.isArray(v) && !_.isFunction(v) && _.isObject(v), 'Object');
test.isPlainObject = value => validate(value, _.isPlainObject, 'Plain Object');
test.isPromise = value => validate(value, v => !!v.then && !!v.catch && !_.isArray(v), 'Promise');
test.isRegExp = value => validate(value, _.isRegExp, 'RegExp');
test.isSet = value => validate(value, _.isSet, 'Set');
test.isString = value => validate(value, _.isString, 'String');
test.isSymbol = value => validate(value, _.isSymbol, 'Symbol');
test.isTypedArray = value => validate(value, _.isTypedArray, 'Typed Array');
test.isWeakMap = value => validate(value, _.isWeakMap, 'WeakMap');
test.isWeakSet = value => validate(value, _.isWeakSet, 'WeakSet');

module.exports = test;
