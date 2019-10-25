const assert = require('../index');

describe('isError()', () => {
  it('should test if value is an Error', () => {
    assert.isError({a: new Error('Some error')});
  });

  it('should throw an error if value is a null', () => {
    expect.assertions(1);

    try {
      assert.isError({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isError({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isError({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isError({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isError({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isError({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isError({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: object');
    }
  });
});
