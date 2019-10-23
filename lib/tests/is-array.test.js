const assert = require('../index');

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
