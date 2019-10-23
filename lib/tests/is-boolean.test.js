const assert = require('../index');

describe('isBoolean()', () => {
  it('should test if value is a boolean', () => {
    assert.isBoolean({a: true});
    assert.isBoolean({a: false});
  });

  it('should throw an error if value is a null', () => {
    try {
      assert.isBoolean({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    try {
      assert.isBoolean({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    try {
      assert.isBoolean({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    try {
      assert.isBoolean({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    try {
      assert.isBoolean({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isBoolean({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isBoolean({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
    }
  });
});
