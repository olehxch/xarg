const assert = require('../index');

describe('Assert', () => {
  describe('assert()', () => {
    it('should test custom assertion', () => {
      assert(1 === 1); // eslint-disable-line
    });

    it('should throw an error', () => {
      try {
        assert(1 === '2', 'custom exception');
      } catch (ex) {
        expect(ex.message).toEqual('custom exception');
      }
    });
  });

  describe('isDefined()', () => {
    it('should test if value is defined', () => {
      assert.isDefined({});
    });

    it('should test if value is defined for object', () => {
      assert.isDefined({a: 1, b: '2', c: [], d: {}, e: () => {}}); // eslint-disable-line
    });

    it('should throw an error if value is not defined for object', () => {
      try {
        assert.isDefined({ a: null, b: undefined}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"b" should be defined');
      }
    });

    it('should throw an error if value is "undefined"', () => {
      try {
        assert.isDefined({a: undefined}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be defined');
      }
    });
  });

  describe('isArray()', () => {
    it('should test if value is an array', () => {
      assert.isArray({a: []});
    });

    it('should throw an error if value is a number', () => {
      try {
        assert.isArray({a: 1});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Array, but got: number');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isArray({a: 'a'});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Array, but got: string');
      }
    });

    it('should throw an error if value is an object', () => {
      try {
        assert.isArray({a: {}});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Array, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isArray({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Array, but got: function');
      }
    });
  });

  describe('isString()', () => {
    it('should test if value is a string', () => {
      assert.isString({a: '1'});
    });

    it('should throw an error if value is a number', () => {
      try {
        assert.isString({a: 1});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type String, but got: number');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isString({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type String, but got: object');
      }
    });

    it('should throw an error if value is an object', () => {
      try {
        assert.isString({a: {}});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type String, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isString({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type String, but got: function');
      }
    });
  });

  describe('isFunction()', () => {
    it('should test if value is a function', () => {
      assert.isFunction({a: () => {}}); // eslint-disable-line
    });

    it('should throw an error if value is a number', () => {
      try {
        assert.isFunction({a: 1});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Function, but got: number');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isFunction({a: 'a'});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Function, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isFunction({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Function, but got: object');
      }
    });

    it('should throw an error if value is an object', () => {
      try {
        assert.isFunction({a: {}});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Function, but got: object');
      }
    });
  });

  describe('isObject()', () => {
    it('should test if value is an object', () => {
      assert.isObject({a: {}});
    });

    it('should throw an error if value is a number', () => {
      try {
        assert.isObject({a: 1});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Object, but got: number');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isObject({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Object, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isObject({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Object, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isObject({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Object, but got: function');
      }
    });
  });

  describe('isPromise()', () => {
    it('should test if value is a Promise', () => {
      assert.isPromise({a: Promise.resolve()});
      assert.isPromise({a: new Promise(r => r())});
      assert.isPromise({a: Promise.reject().catch(e => {})}); //eslint-disable-line
      assert.isPromise({a: Promise.reject()});
    });

    it('should throw an error if value is a number', () => {
      try {
        assert.isPromise({a: 1});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Promise, but got: number');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isPromise({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Promise, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isPromise({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Promise, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isPromise({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Promise, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isPromise({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Promise, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isPromise({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Promise, but got: object');
      }
    });
  });

  describe('isNull()', () => {
    it('should test if value is null', () => {
      assert.isNull({a: null});
    });

    it('should throw an error if value is a number', () => {
      try {
        assert.isNull({a: 1});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Null, but got: number');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isNull({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Null, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isNull({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Null, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isNull({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Null, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isNull({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Null, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isNull({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Null, but got: object');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isNull({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Null, but got: object');
      }
    });
  });

  describe('isNumber()', () => {
    it('should test if value is a Number', () => {
      assert.isNumber({a: 1});
    });

    it('should throw an error if value is a null', () => {
      try {
        assert.isNumber({a: null});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Number, but got: object');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isNumber({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Number, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isNumber({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Number, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isNumber({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Number, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isNumber({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Number, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isNumber({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Number, but got: object');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isNumber({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Number, but got: object');
      }
    });
  });

  describe('isSymbol()', () => {
    it('should test if value is a Symbol', () => {
      assert.isSymbol({a: Symbol('symbol')});
    });

    it('should throw an error if value is a null', () => {
      try {
        assert.isSymbol({a: null});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Symbol, but got: object');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isSymbol({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Symbol, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isSymbol({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Symbol, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isSymbol({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Symbol, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isSymbol({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Symbol, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isSymbol({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Symbol, but got: object');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isSymbol({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Symbol, but got: object');
      }
    });
  });

  describe('isMap()', () => {
    it('should test if value is a Map', () => {
      assert.isMap({a: new Map()});
    });

    it('should throw an error if value is a null', () => {
      try {
        assert.isMap({a: null});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Map, but got: object');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isMap({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Map, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isMap({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Map, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isMap({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Map, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isMap({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Map, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isMap({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Map, but got: object');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isMap({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Map, but got: object');
      }
    });
  });

  describe('isWeakMap()', () => {
    it('should test if value is a WeakMap', () => {
      assert.isWeakMap({a: new WeakMap()});
    });

    it('should throw an error if value is a null', () => {
      try {
        assert.isWeakMap({a: null});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakMap, but got: object');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isWeakMap({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakMap, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isWeakMap({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakMap, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isWeakMap({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakMap, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isWeakMap({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakMap, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isWeakMap({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakMap, but got: object');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isWeakMap({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakMap, but got: object');
      }
    });
  });

  describe('isSet()', () => {
    it('should test if value is a Set', () => {
      assert.isSet({a: new Set()});
    });

    it('should throw an error if value is a null', () => {
      try {
        assert.isSet({a: null});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Set, but got: object');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isSet({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Set, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isSet({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Set, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isSet({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Set, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isSet({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Set, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isSet({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Set, but got: object');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isSet({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Set, but got: object');
      }
    });
  });

  describe('isWeakSet()', () => {
    it('should test if value is a WeakSet', () => {
      assert.isWeakSet({a: new WeakSet()});
    });

    it('should throw an error if value is a null', () => {
      try {
        assert.isWeakSet({a: null});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakSet, but got: object');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isWeakSet({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakSet, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isWeakSet({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakSet, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isWeakSet({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakSet, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isWeakSet({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakSet, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isWeakSet({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakSet, but got: object');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isWeakSet({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type WeakSet, but got: object');
      }
    });
  });

  describe('isBoolean()', () => {
    it('should test if value is a boolean', () => {
      assert.isBoolean({a: true});
      assert.isBoolean({a: false});
    });

    it('should throw an error if value is a null', () => {
      try {
        assert.isBoolean({a: null});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isBoolean({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Boolean, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isBoolean({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isBoolean({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Boolean, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isBoolean({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Boolean, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isBoolean({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isBoolean({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
      }
    });
  });

  describe('isError()', () => {
    it('should test if value is an Error', () => {
      assert.isError({a: new Error('Some error')});
    });

    it('should throw an error if value is a null', () => {
      try {
        assert.isError({a: null});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Error, but got: object');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isError({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Error, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isError({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Error, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isError({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Error, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isError({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Error, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isError({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Error, but got: object');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isError({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Error, but got: object');
      }
    });
  });

  describe('isDate()', () => {
    it('should test if value is a Date', () => {
      assert.isDate({a: new Date()});
    });

    it('should throw an error if value is a null', () => {
      try {
        assert.isDate({a: null});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Date, but got: object');
      }
    });

    it('should throw an error if value is a string', () => {
      try {
        assert.isDate({a: ''});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Date, but got: string');
      }
    });

    it('should throw an error if value is an array', () => {
      try {
        assert.isDate({a: []});
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Date, but got: object');
      }
    });

    it('should throw an error if value is a function', () => {
      try {
        assert.isDate({a: () => {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Date, but got: function');
      }
    });

    it('should throw an error if value is a promise function', () => {
      try {
        assert.isDate({a: Promise.resolve}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Date, but got: function');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isDate({a: {}}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Date, but got: object');
      }
    });

    it('should throw an error if value is a promise object', () => {
      try {
        assert.isDate({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
      } catch (ex) {
        expect(ex.message).toEqual('"a" should be of type Date, but got: object');
      }
    });
  });
});
