const assert = require('../index');

describe('isEmpty()', () => {
  it('should test if value is Empty', () => {
    assert.isEmpty({a: null});
    assert.isEmpty({a: true});
    assert.isEmpty({a: 1});
    assert.isEmpty({a: []});
    assert.isEmpty({a: {}});
  });

  it('should throw an error if value is a string', () => {
    expect.assertions(1);

    try {
      assert.isEmpty({a: '1'});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be empty, but got: string');
    }
  });

  it('should throw an error if value is an array', () => {
    expect.assertions(1);

    try {
      assert.isEmpty({a: [1]});
    } catch (ex) {
      expect(ex.message).toEqual('"a" should be empty, but got: object');
    }
  });
});
