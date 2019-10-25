const assert = require('../index');

describe('isPromise()', () => {
  it('should test if value is a Promise', () => {
    assert.isPromise({a: Promise.resolve()});
    assert.isPromise({a: new Promise(r => r())});
    assert.isPromise({a: Promise.reject().catch(e => {})}); //eslint-disable-line
    assert.isPromise({a: Promise.reject()});
  });

  it('should throw an error if value is a number', () => {
    expect.assertions(1);

    try {
      assert.isPromise({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Promise, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isPromise({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Promise, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isPromise({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Promise, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isPromise({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Promise, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    expect.assertions(1);

    try {
      assert.isPromise({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Promise, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    expect.assertions(1);

    try {
      assert.isPromise({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Promise, but got: object');
    }
  });
});
