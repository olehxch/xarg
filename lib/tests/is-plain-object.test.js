const assert = require('../index');

describe('isPlainObject()', () => {
  it('should test if value is a plain object', () => {
    assert.isPlainObject({a: {}});
  });

  it('should test if value is a plain object', () => {
    assert.isPlainObject({a: Object.create(null)});
  });

  it('should throw an error if value is a number', () => {
    expect.assertions(1);

    try {
      assert.isPlainObject({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Plain Object, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isPlainObject({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Plain Object, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isPlainObject({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Plain Object, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isPlainObject({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Plain Object, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isPlainObject({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Plain Object, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isPlainObject({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Plain Object, but got: object');
    }
  });
});
