[![npm version](https://badge.fury.io/js/xarg.svg)](https://badge.fury.io/js/xarg)
[![CodeQL](https://github.com/ochaplia/xarg/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/ochaplia/xarg/actions/workflows/codeql-analysis.yml)
[![Build Status](https://travis-ci.org/ochaplia/xarg.svg?branch=master)](https://travis-ci.org/ochaplia/xarg)

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
* isEmpty()
* isError()
* isFinite()
* isFunction()
* isInteger()
* isMap()
* isNaN()
* isNil()
* isNull()
* isNumber()
* isObject()
* isPlainObject()
* isPromise()
* isRegExp()
* isSet()
* isString()
* isSymbol()
* isTypedArray()
* isWeakMap()
* isWeakSet()

To test your arguments you need to pass an object with data. For example:

```js
xarg.isArray({a: [], b:[1,2,3], c: {}})
```

### Examples
#### Example #1

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

#### Example #2

```js
class APIService {
  constructor(url) {
    xarg.isString({url});
  }

  post(json) {
    xarg.isObject({json});
  }
}

const service = new APIService('https://example.com');
service.post({ data: '123' }); // OK

new APIService([]); // AssertionError [ERR_ASSERTION]: "url" should be of type String, but got: object
new APIService({}); // AssertionError [ERR_ASSERTION]: "url" should be of type String, but got: object

const service = new APIService(123); // AssertionError [ERR_ASSERTION]: "age" should be of type Number, but got: string
service.post('123'); // AssertionError [ERR_ASSERTION]: "json" should be of type Object, but got: string

```

### Tests

Run tests:

`npm test`

Run tests with code coverage:

`npm run test-cov`
