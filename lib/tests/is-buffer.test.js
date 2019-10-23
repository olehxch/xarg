const assert = require('../index');

describe('isBuffer()', () => {
  it('should test if value is an array', () => {
    assert.isBuffer({a: new Buffer(8)});
  });

  it('should throw an error if value is a array', () => {
    try {
      assert.isBuffer({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Buffer, but got: object');
    }
  });

  it('should throw an error if value is a number', () => {
    try {
      assert.isBuffer({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Buffer, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    try {
      assert.isBuffer({a: 'a'});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Buffer, but got: string');
    }
  });

  it('should throw an error if value is an object', () => {
    try {
      assert.isBuffer({a: {}});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Buffer, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    try {
      assert.isBuffer({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Buffer, but got: function');
    }
  });
});
