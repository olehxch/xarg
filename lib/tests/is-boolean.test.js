const assert = require('../index');

describe('isBoolean()', () => {
  it('should test if value is a boolean', () => {
    assert.isBoolean({a: true});
    assert.isBoolean({a: false});
  });

  it('should throw an error if value is a null', () => {
    expect.assertions(1);

    try {
      assert.isBoolean({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isBoolean({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isBoolean({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isBoolean({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isBoolean({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isBoolean({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isBoolean({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Boolean, but got: object');
    }
  });
});
