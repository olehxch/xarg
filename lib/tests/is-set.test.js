const assert = require('../index');

describe('isSet()', () => {
  it('should test if value is a Set', () => {
    assert.isSet({a: new Set()});
  });

  it('should throw an error if value is a null', () => {
    try {
      assert.isSet({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    try {
      assert.isSet({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    try {
      assert.isSet({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    try {
      assert.isSet({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    try {
      assert.isSet({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isSet({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isSet({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: object');
    }
  });
});
