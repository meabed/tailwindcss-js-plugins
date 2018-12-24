const defaults = require('lodash.defaults');
const isFunction = require('lodash.isfunction');

function defaultOptions() {
  return {
    borderRadius: '.25rem',
    boxShadow: '0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08)',
    padding: '2rem 2.5rem',
  };
}

module.exports = function (options) {
  options = isFunction(options)
    ? options(defaultOptions())
    : defaults(options, defaultOptions());

  return function ({ addComponents, addUtilities, addUtilitiesaddComponents, e, prefix, config }) {
    addComponents([
      {
        '.card': {
          borderRadius: options.borderRadius,
          overflow: 'hidden',
          boxShadow: options.boxShadow,
          backgroundColor: config('colors.white'),
        },
        '.card-image': {
          display: 'block',
          width: '100%',
        },
        '.card-header': {
          padding: options.padding,
          backgroundColor: '#fbfcfd',
          borderTopRightRadius: '.5rem',
          borderTopLeftRadius: '.5rem',
        },
        '.card-body': {
          borderTopWidth:'2px',
          borderColor: config('colors.secondary-lighter'),
          padding: options.padding,
        },
        '.card-footer': {
          padding: options.padding,
          borderBottomRightRadius: '.5rem',
          borderBottomLeftRadius: '.5rem',
          borderTopWidth: '2px',
          borderColor: config('colors.secondary-lighter')
        },
        '.card-content': {
          padding: options.padding,
        },
      }
    ]);
  };
};
