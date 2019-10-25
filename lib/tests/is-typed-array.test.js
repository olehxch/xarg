const assert = require('../index');

describe('isTypedArray()', () => {
  it('should test if value is Typed Array', () => {
    assert.isTypedArray({a: new Uint8Array});
  });

  it('should throw an error if value is a number', () => {
    expect.assertions(1);

    try {
      assert.isTypedArray({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Typed Array, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isTypedArray({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Typed Array, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isTypedArray({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Typed Array, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isTypedArray({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Typed Array, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isTypedArray({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Typed Array, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isTypedArray({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Typed Array, but got: object');
    }
  });
});
