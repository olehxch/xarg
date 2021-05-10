const xarg = require('../index');

function hello(text, age) {
  xarg.isString({text});
  xarg.isNumber({age});
}

describe('Example #1()', () => {
  it('valid case', () => {
    hello('John', 25);
  });

  it('should throw an error', () => {
    expect.assertions(1);

    try {
      hello([]);
    } catch (ex) {
      expect(ex.message).toEqual('"text" should be of type String, but got: object');
    }
  });

  it('should throw an error', () => {
    expect.assertions(1);

    try {
      hello('John');
    } catch (ex) {
      expect(ex.message).toEqual('"age" should be defined');
    }
  });

  it('should throw an error', () => {
    expect.assertions(1);

    try {
      hello('John', 'abc');
    } catch (ex) {
      expect(ex.message).toEqual('"age" should be of type Number, but got: string');
    }
  });
});
