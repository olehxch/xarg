const assert = require('../index');

describe('isWeakMap()', () => {
  it('should test if value is a WeakMap', () => {
    assert.isWeakMap({a: new WeakMap()});
  });

  it('should throw an error if value is a null', () => {
    expect.assertions(1);

    try {
      assert.isWeakMap({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakMap, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isWeakMap({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakMap, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isWeakMap({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakMap, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isWeakMap({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakMap, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isWeakMap({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakMap, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isWeakMap({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakMap, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isWeakMap({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakMap, but got: object');
    }
  });
});
