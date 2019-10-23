const assert = require('../index');

describe('isMap()', () => {
  it('should test if value is a Map', () => {
    assert.isMap({a: new Map()});
  });

  it('should throw an error if value is a null', () => {
    try {
      assert.isMap({a: null});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Map, but got: object');
    }
  });

  it('should throw an error if value is a string', () => {
    try {
      assert.isMap({a: ''});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Map, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    try {
      assert.isMap({a: []});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Map, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    try {
      assert.isMap({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Map, but got: function');
    }
  });

  it('should throw an error if value is a promise function', () => {
    try {
      assert.isMap({a: Promise.resolve}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Map, but got: function');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isMap({a: {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Map, but got: object');
    }
  });

  it('should throw an error if value is a promise object', () => {
    try {
      assert.isMap({a: new Promise((resolve, reject) => {})}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Map, but got: object');
    }
  });
});
