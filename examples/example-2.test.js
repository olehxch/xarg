const xarg = require('../index');

class APIService {
  constructor(url) {
    xarg.isString({url});
  }

  post(json) {
    xarg.isObject({json});
  }
}

describe('Example #1()', () => {
  it('valid case', () => {
    const service = new APIService('https://example.com');

    service.post({ data: '123' });
  });

  it('should throw an error', () => {
    expect.assertions(1);

    try {
      new APIService([]);
    } catch (ex) {
      expect(ex.message).toEqual('"url" should be of type String, but got: object');
    }
  });

  it('should throw an error', () => {
    expect.assertions(1);

    try {
      new APIService({});
    } catch (ex) {
      expect(ex.message).toEqual('"url" should be of type String, but got: object');
    }
  });

  it('should throw an error', () => {
    expect.assertions(1);

    try {
      new APIService(123);
    } catch (ex) {
      expect(ex.message).toEqual('"url" should be of type String, but got: number');
    }
  });

  it('should throw an error', () => {
    expect.assertions(1);

    try {
      const service = new APIService('https://example.com');

      service.post('123');
    } catch (ex) {
      expect(ex.message).toEqual('"json" should be of type Object, but got: string');
    }
  });
});
