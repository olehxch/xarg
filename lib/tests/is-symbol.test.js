const assert = require('../index');

describe('isSymbol()', () => {
  it('should test if value is a Symbol', () => {
    assert.isSymbol({a: Symbol('symbol')});
  });

  it('should throw an error if value is a null', () => {
    expect.assertions(1);

    try {
      assert.isSymbol({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Symbol, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isSymbol({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Symbol, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isSymbol({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Symbol, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isSymbol({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Symbol, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isSymbol({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Symbol, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isSymbol({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Symbol, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isSymbol({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Symbol, but got: object');
    }
  });
});
