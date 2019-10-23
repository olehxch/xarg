const assert = require('../index');

describe('isNull()', () => {
  it('should test if value is null', () => {
    assert.isNull({a: null});
  });

  it('should throw an error if value is a number', () => {
    try {
      assert.isNull({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Null, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    try {
      assert.isNull({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Null, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    try {
      assert.isNull({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Null, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    try {
      assert.isNull({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Null, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    try {
      assert.isNull({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Null, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isNull({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Null, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isNull({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Null, but got: object');
    }
  });
});
