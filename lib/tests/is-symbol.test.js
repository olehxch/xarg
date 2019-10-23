const assert = require('../index');

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
