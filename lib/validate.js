const assert = require('assert');
const _ = require('lodash');

function validate(objectInTest, fn, typeName, prefix = 'of type ') {
  if (fn) {
    assert(_.isFunction(fn), '"fn" should be a Function');
  }

  if (!fn && !typeName) {
    assert(_.isObject(objectInTest), '"objectInTest" should be an object');
  }

  const expected = typeName || 'to be defined';
  let actual = '';

  try {
    _
      .keys(objectInTest)
      .forEach(key => {
        const prop = objectInTest[key];

        assert(!_.isUndefined(prop), `"${key}" should be defined`);

        if (typeName) {
          actual = typeof prop;

          assert(fn(prop), `"${key}" should be ${prefix}${typeName}, but got: ${typeof prop}`);
        }
      });
  } catch (ex) {
    const stack = ex.stack.split('\n');

    ex.stack = [stack[0], ...stack.slice(5)].join('\n');
    ex.actual = actual;
    ex.expected = expected;

    throw ex;
  }
}

module.exports = validate;
