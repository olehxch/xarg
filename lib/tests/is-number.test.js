const assert = require('../index');

describe('isNumber()', () => {
  it('should test if value is a Number', () => {
    assert.isNumber({a: 1});
  });

  it('should throw an error if value is a null', () => {
    expect.assertions(1);

    try {
      assert.isNumber({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Number, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isNumber({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Number, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isNumber({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Number, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isNumber({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Number, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isNumber({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Number, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isNumber({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Number, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isNumber({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Number, but got: object');
    }
  });
});
