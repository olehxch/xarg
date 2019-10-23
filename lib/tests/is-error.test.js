const assert = require('../index');

describe('isError()', () => {
  it('should test if value is an Error', () => {
    assert.isError({a: new Error('Some error')});
  });

  it('should throw an error if value is a null', () => {
    try {
      assert.isError({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    try {
      assert.isError({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    try {
      assert.isError({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    try {
      assert.isError({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    try {
      assert.isError({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isError({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isError({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Error, but got: object');
    }
  });
});
