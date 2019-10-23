const assert = require('../index');

describe('isDefined()', () => {
  it('should test if value is defined', () => {
    assert.isDefined({});
  });

  it('should test if value is defined for object', () => {
    assert.isDefined({a: 1, b: '2', c: [], d: {}, e: () => {}}); // eslint-disable-line
  });

  it('should throw an error if value is not defined for object', () => {
    try {
      assert.isDefined({ a: null, b: undefined}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"b" should be defined');
    }
  });

  it('should throw an error if value is "undefined"', () => {
    try {
      assert.isDefined({a: undefined}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be defined');
    }
  });
});
