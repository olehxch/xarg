const assert = require('../index');

describe('isInteger()', () => {
  it('should test if value is a Integer', () => {
    assert.isInteger({a: 1});
  });

  it('should throw an error if value is a Number.MIN_VALUE', () => {
    expect.assertions(1);

    try {
      assert.isInteger({a: Number.MIN_VALUE}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Integer, but got: number');
    }
  });

  it('should throw an error if value is an Infinity', () => {
    expect.assertions(1);

    try {
      assert.isInteger({a: Infinity}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Integer, but got: number');
    }
  });

  it('should throw an error if value is a null', () => {
    expect.assertions(1);

    try {
      assert.isInteger({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Integer, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isInteger({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Integer, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isInteger({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Integer, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isInteger({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Integer, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isInteger({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Integer, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isInteger({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Integer, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isInteger({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Integer, but got: object');
    }
  });
});
