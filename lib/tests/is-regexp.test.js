const assert = require('../index');

describe('isRegExp()', () => {
  it('should test if value is RegExp', () => {
    assert.isRegExp({a: /abc/});
  });

  it('should throw an error if value is a number', () => {
    expect.assertions(1);

    try {
      assert.isRegExp({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type RegExp, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isRegExp({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type RegExp, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isRegExp({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type RegExp, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isRegExp({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type RegExp, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isRegExp({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type RegExp, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isRegExp({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type RegExp, but got: object');
    }
  });
});
