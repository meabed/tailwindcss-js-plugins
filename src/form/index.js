const defaults = require('lodash.defaults');
const isFunction = require('lodash.isfunction');

function defaultOptions() {
  return {
    outline: '0',
    borderRadius: '.25rem',
    padding: '1rem',
  };
}

module.exports = function (options) {
  options = isFunction(options)
    ? options(defaultOptions())
    : defaults(options, defaultOptions());

  return function ({ addComponents, config }) {
    addComponents([
      {
        '.form-input': {
          outline: options.outline,
          borderRadius: options.borderRadius,
          padding: options.padding,
          backgroundColor: config('colors.secondary-lighter'),
          color: config('colors.black'),
        }
      }
    ]);
  };
};
