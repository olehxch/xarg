const assert = require('../index');

describe('isFinite()', () => {
  it('should test if value is a Finite Number', () => {
    assert.isFinite({a: 1});
  });

  it('should test if value is a Finite Number', () => {
    assert.isFinite({a: Number.MIN_VALUE});
  });

  it('should throw an error if value is an Infinity', () => {
    expect.assertions(1);

    try {
      assert.isFinite({a: Infinity}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Finite Number, but got: number');
    }
  });

  it('should throw an error if value is a null', () => {
    expect.assertions(1);

    try {
      assert.isFinite({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Finite Number, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isFinite({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Finite Number, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isFinite({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Finite Number, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isFinite({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Finite Number, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isFinite({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Finite Number, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isFinite({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Finite Number, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isFinite({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Finite Number, but got: object');
    }
  });
});
