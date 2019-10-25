const assert = require('../index');

describe('isFunction()', () => {
  it('should test if value is a function', () => {
    assert.isFunction({a: () => {}}); // eslint-disable-line
  });

  it('should throw an error if value is a number', () => {
    expect.assertions(1);

    try {
      assert.isFunction({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Function, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isFunction({a: 'a'});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Function, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isFunction({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Function, but got: object');
    }
  });

  it('should throw an error if value is an object', () => {
    expect.assertions(1);

    try {
      assert.isFunction({a: {}});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Function, but got: object');
    }
  });
});
