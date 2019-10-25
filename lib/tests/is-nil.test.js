const assert = require('../index');

describe('isNil()', () => {
  it('should test if value is Nil', () => {
    assert.isNil({a: null});
  });

  it('should throw an error if value is a Number.MIN_VALUE', () => {
    expect.assertions(1);

    try {
      assert.isNil({a: Number.MIN_VALUE}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Nil, but got: number');
    }
  });

  it('should throw an error if value is an Infinity', () => {
    expect.assertions(1);

    try {
      assert.isNil({a: Infinity}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Nil, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isNil({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Nil, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isNil({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Nil, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isNil({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Nil, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isNil({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Nil, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isNil({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Nil, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isNil({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Nil, but got: object');
    }
  });
});
