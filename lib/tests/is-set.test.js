const assert = require('../index');

describe('isSet()', () => {
  it('should test if value is a Set', () => {
    assert.isSet({a: new Set()});
  });

  it('should throw an error if value is a null', () => {
    expect.assertions(1);

    try {
      assert.isSet({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isSet({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isSet({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isSet({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isSet({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isSet({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isSet({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Set, but got: object');
    }
  });
});
