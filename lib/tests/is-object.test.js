const assert = require('../index');

describe('isObject()', () => {
  it('should test if value is an object', () => {
    assert.isObject({a: {}});
  });

  it('should throw an error if value is a number', () => {
    expect.assertions(1);

    try {
      assert.isObject({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Object, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isObject({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Object, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isObject({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Object, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isObject({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Object, but got: function');
    }
  });
});
