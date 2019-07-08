# xarg

A small tool for validating arguments in JavaScript

### Install

`npm install xarg --save`

### Usage

A list of available functions:

 * isArray()
 * isBoolean()
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

### Tests

Run tests:

`npm test`

Run tests with code coverage:

`npm run test-cov`
