const assert = require('../index');

describe('isWeakSet()', () => {
  it('should test if value is a WeakSet', () => {
    assert.isWeakSet({a: new WeakSet()});
  });

  it('should throw an error if value is a null', () => {
    expect.assertions(1);

    try {
      assert.isWeakSet({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakSet, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isWeakSet({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakSet, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isWeakSet({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakSet, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isWeakSet({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakSet, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isWeakSet({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakSet, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isWeakSet({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakSet, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isWeakSet({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type WeakSet, but got: object');
    }
  });
});
