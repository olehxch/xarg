const assert = require('../index');

describe('isArrayBuffer()', () => {
  it('should test if value is an array buffer', () => {
    assert.isArrayBuffer({a: new ArrayBuffer(10)});
  });

  it('should throw an error if value is a number', () => {
    expect.assertions(1);

    try {
      assert.isArrayBuffer({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type ArrayBuffer, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isArrayBuffer({a: 'a'});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type ArrayBuffer, but got: string');
    }
  });

  it('should throw an error if value is an object', () => {
    expect.assertions(1);

    try {
      assert.isArrayBuffer({a: {}});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type ArrayBuffer, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isArrayBuffer({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type ArrayBuffer, but got: function');
    }
  });
});
