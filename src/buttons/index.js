const map = require('lodash.map');
const get = require('lodash.get');
const omit = require('lodash.omit');
const isFunction = require('lodash.isfunction');
const defaults = require('lodash.defaults');
const Color = require('color');
const defaultConfig = require('tailwindcss/defaultConfig')();

function defaultOptions() {
  return {
    borderRadius: '.25rem',
    fontWeight: '400',
    lineHeight: '1.25',
    fontSize: '1rem',
    padding: '.9rem 1rem',
    colors: {
      white: {
        background: defaultConfig.colors['white'],
        text: defaultConfig.colors['black'],
      },
      black: {
        background: defaultConfig.colors['black'],
        text: defaultConfig.colors['white'],
      },
      grey: {
        background: defaultConfig.colors['grey'],
        text: defaultConfig.colors['black'],
      },
      red: {
        background: defaultConfig.colors['red'],
        text: defaultConfig.colors['white'],
      },
      orange: {
        background: defaultConfig.colors['orange'],
        text: defaultConfig.colors['white'],
      },
      yellow: {
        background: defaultConfig.colors['yellow'],
        text: defaultConfig.colors['yellow-darkest'],
      },
      green: {
        background: defaultConfig.colors['green'],
        text: defaultConfig.colors['white'],
      },
      teal: {
        background: defaultConfig.colors['teal'],
        text: defaultConfig.colors['white'],
      },
      blue: {
        background: defaultConfig.colors['blue'],
        text: defaultConfig.colors['white'],
      },
      indigo: {
        background: defaultConfig.colors['indigo'],
        text: defaultConfig.colors['white'],
      },
      purple: {
        background: defaultConfig.colors['purple'],
        text: defaultConfig.colors['white'],
      },
      pink: {
        background: defaultConfig.colors['pink'],
        text: defaultConfig.colors['white'],
      },
    },
    sizes: {
      sm: {
        fontSize: '.875rem',
        padding: '.5rem .75rem',
      },
      lg: {
        fontSize: '1.25rem',
        padding: '.75rem 1.5rem',
      }
    }
  };
}

module.exports = function (options) {
  options = isFunction(options)
    ? options(defaultOptions())
    : defaults(options, defaultOptions());

  return function ({ addComponents, e }) {
    addComponents([
      {
        '.btn': {
          display: 'inline-block',
          padding: options.padding,
          fontSize: options.fontSize,
          fontWeight: options.fontWeight,
          lineHeight: options.lineHeight,
          borderRadius: options.borderRadius,
          textDecoration: 'none',
        }
      },
      ...map(omit(options.sizes, 'default'), (sizeOptions, name) => ({
        [`.btn-${ e(name) }`]: {
          padding: get(sizeOptions, 'padding', options.padding),
          fontSize: get(sizeOptions, 'fontSize', options.fontSize),
          fontWeight: get(sizeOptions, 'fontWeight', options.fontWeight),
          lineHeight: get(sizeOptions, 'lineHeight', options.lineHeight),
          borderRadius: get(sizeOptions, 'borderRadius', options.borderRadius),
        },
      })),
      ...map(options.colors, (colorOptions, name) => ({
        [`.btn-${ e(name) }`]: {
          backgroundColor: colorOptions.background,
          color: colorOptions.text,
          '&:focus': {
            outline: 0,
            boxShadow: `0 0 0 .2em ${ Color(colorOptions.background).alpha(.5).rgb().toString() }`,
          },
          '&:hover': {
            backgroundColor: get(colorOptions, 'hoverBackground', Color(colorOptions.background).darken(0.1).hex().toString()),
            color: get(colorOptions, 'hoverText', colorOptions.text),
          },
          '&:active': {
            backgroundColor: get(colorOptions, 'activeBackground', Color(colorOptions.background).darken(0.1).hex().toString()),
            color: get(colorOptions, 'activeText', colorOptions.text),
          }
        }
      }))
    ]);
  };
};
