const range = require('lodash.range');
const map = require('lodash.map');
const max = require('lodash.max');

module.exports = function ({ grids = range(1, 12), gaps = {}, variants = ['responsive'] }) {
  return function ({ e, addUtilities }) {
    addUtilities([
      { '.grid': { display: 'grid' } },
      { '.grid-dense': { gridAutoFlow: 'dense' } },
      ...map(gaps, (size, name) => ({
        [`.${ e(`grid-gap-${ name }`) }`]: { gridGap: size },
      })),
      ...grids.map(columns => ({
        [`.grid-columns-${ columns }`]: {
          gridTemplateColumns: `repeat(${ columns }, 1fr)`,
        }
      })),
      ...range(1, max(grids) + 1).map(span => ({
        [`.col-span-${ span }`]: {
          gridColumnStart: `span ${ span }`,
        }
      })),
      ...range(1, max(grids) + 2).map(line => ({
        [`.col-start-${ line }`]: {
          gridColumnStart: `${ line }`,
        },
        [`.col-end-${ line }`]: {
          gridColumnEnd: `${ line }`,
        },
      })),
    ], variants);
  };
};
