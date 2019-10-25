const assert = require('../index');

describe('isBuffer()', () => {
  it('should test if value is an Buffer', () => {
    assert.isBuffer({a: new Buffer(8)});
  });

  it('should throw an error if value is a array', () => {
    expect.assertions(1);

    try {
      assert.isBuffer({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Buffer, but got: object');
    }
  });

  it('should throw an error if value is a number', () => {
    expect.assertions(1);

    try {
      assert.isBuffer({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Buffer, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isBuffer({a: 'a'});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Buffer, but got: string');
    }
  });

  it('should throw an error if value is an object', () => {
    expect.assertions(1);

    try {
      assert.isBuffer({a: {}});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Buffer, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isBuffer({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Buffer, but got: function');
    }
  });
});
