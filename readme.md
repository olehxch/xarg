[![npm version](https://badge.fury.io/js/xarg.svg)](https://badge.fury.io/js/xarg)
[![Build Status](https://travis-ci.org/audiowaves/xarg.svg?branch=master)](https://travis-ci.org/audiowaves/xarg)

# xarg

A small tool for validating arguments in JavaScript

### Install

`npm install xarg --save`

### Usage

Every function will check if passed variable is defined and if it have a value of a specific type. 
This will throw an assertion error when values are not valid.

A list of available functions:

 * isArguments()
 * isArray()
 * isArrayBuffer()
 * isBoolean()
 * isBuffer()
 * isDate()
 * isDefined()
 * isError()
 * isFunction()
 * isMap()
 * isNull()
 * isNumber()
 * isObject()
 * isPromise()
 * isSet()
 * isString()
 * isSymbol()
 * isWeakMap()
 * isWeakSet()

To test your arguments you need to pass an object with the data. For example:

```js
xarg.isArray({a: [], b:[1,2,3], c: {}})
```

### Examples

```js
function hello(text, age) {
  xarg.isString({text});
  xarg.isNumber({age});
}
  
hello('John', 25); // OK
hello([]); // AssertionError [ERR_ASSERTION]: "text" should be of type String, but got: object
hello('John'); // AssertionError [ERR_ASSERTION]: "age" should be defined
hello('John', 'abc'); // AssertionError [ERR_ASSERTION]: "age" should be of type Number, but got: string
```

### Tests

Run tests:

`npm test`

Run tests with code coverage:

`npm run test-cov`
