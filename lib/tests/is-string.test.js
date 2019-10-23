const assert = require('../index');

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
