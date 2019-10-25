const assert = require('../index');

describe('isNaN()', () => {
  it('should test if value is NaN', () => {
    assert.isNaN({a: NaN});
  });

  it('should test if value is NaN', () => {
    assert.isNaN({a: new Number(NaN)}); // eslint-disable-line
  });

  it('should throw an error if value is a Number.MIN_VALUE', () => {
    expect.assertions(1);

    try {
      assert.isNaN({a: Number.MIN_VALUE}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type NaN, but got: number');
    }
  });

  it('should throw an error if value is an Infinity', () => {
    expect.assertions(1);

    try {
      assert.isNaN({a: Infinity}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type NaN, but got: number');
    }
  });

  it('should throw an error if value is a null', () => {
    expect.assertions(1);

    try {
      assert.isNaN({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type NaN, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isNaN({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type NaN, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isNaN({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type NaN, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isNaN({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type NaN, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isNaN({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type NaN, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isNaN({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type NaN, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isNaN({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type NaN, but got: object');
    }
  });
});
