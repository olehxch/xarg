const assert = require('../index');

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
