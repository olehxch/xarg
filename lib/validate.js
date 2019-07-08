const assert = require('assert');
const _ = require('lodash');

function validate(objectInTest, fn, typeName) {
  if (fn) {
    assert(_.isFunction(fn), '"fn" should be a Function');
  }

  if (!fn && !typeName) {
    assert(_.isObject(objectInTest), '"objectInTest" should be an object');
  }

  _
    .keys(objectInTest)
    .forEach(key => {
      const prop = objectInTest[key];

      assert(!_.isUndefined(prop), `"${key}" should be defined`);

      if (typeName) {
        assert(fn(prop), `"${key}" should be of type ${typeName}, but got: ${typeof prop}`);
      }
    });
}

module.exports = validate;
