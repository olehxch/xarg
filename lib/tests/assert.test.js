const assert = require('../index');

describe('assert()', () => {
  it('should test custom assertion', () => {
    assert(1 === 1); // eslint-disable-line
  });

  it('should throw an error', () => {
    try {
      assert(1 === '2', 'custom exception');
    } catch (ex) {
      expect(ex.message).toEqual('custom exception');
    }
  });
});
