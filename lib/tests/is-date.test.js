const assert = require('../index');

describe('isDate()', () => {
  it('should test if value is a Date', () => {
    assert.isDate({a: new Date()});
  });

  it('should throw an error if value is a null', () => {
    try {
      assert.isDate({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Date, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    try {
      assert.isDate({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Date, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    try {
      assert.isDate({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Date, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    try {
      assert.isDate({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Date, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    try {
      assert.isDate({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Date, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isDate({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Date, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isDate({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Date, but got: object');
    }
  });
});
