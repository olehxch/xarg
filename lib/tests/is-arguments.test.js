const assert = require('../index');

describe('isArguments()', () => {
  it('should test if value is an array arguments', () => {
    assert.isArguments({a: (function () { return arguments; })()});
  });

  it('should throw an error if value is a number', () => {
    expect.assertions(1);

    try {
      assert.isArguments({a: 1});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Arguments, but got: number');
    }
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isArguments({a: 'a'});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Arguments, but got: string');
    }
  });

  it('should throw an error if value is an object', () => {
    expect.assertions(1);

    try {
      assert.isArguments({a: {}});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Arguments, but got: object');
    }
  });

  it('should throw an error if value is a function', () => {
    expect.assertions(1);

    try {
      assert.isArguments({a: () => {}}); // eslint-disable-line
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be of type Arguments, but got: function');
    }
  });
});
