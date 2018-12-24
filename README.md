## Tailwind css javascript plugins
<div align="center">
  <!-- Build Status -->
  <a href="https://travis-ci.org/meabed/tailwindcss-js-plugins">
    <img src="https://travis-ci.org/meabed/tailwindcss-js-plugins.svg?branch=master" alt="Build Status" />
  </a>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/meabed/tailwindcss-js-plugins">
    <img src="https://david-dm.org/meabed/tailwindcss-js-plugins.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/meabed/tailwindcss-js-plugins?type=dev"> 
    <img src="https://david-dm.org/meabed/tailwindcss-js-plugins/dev-status.svg" alt="devDependency Status" />
  </a>
  <a href="LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License">
  </a>
  <a href="https://meabed.com">
    <img src="https://img.shields.io/badge/Author-blog-green.svg?style=flat-square" alt="Authoer Blog">
  </a>
</div>

#### description

### Install 
``` yarn add --dev tailwindcss-js-plugins ```

``` npm install --save-dev tailwindcss-js-plugins ```


### usage example 
```javascript
const tailwindConfig = {
  colors: colors,
  ....
  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
  },
  ....
  
};

// add this before end of the file and adjust the module exports so you can pass your
// custom configuration to the plugins 
const {
  spacedItems,
  buttons,
  card,
  form,
  cssGrid
} = require('tailwindcss-js-plugins');

tailwindConfig.plugins.push(
  buttons()
);
tailwindConfig.plugins.push(
  form()
);
tailwindConfig.plugins.push(
  card()
);
tailwindConfig.plugins.push(
  cssGrid({
    grids: [2, 3, 5, 6, 8, 10, 12],
    gaps: {
      0: '0',
      4: '1rem',
      8: '2rem',
    },
    variants: ['responsive'],
  })
);

tailwindConfig.plugins.push(
  spacedItems({
    values: {
      '1': '1px',
      '2': '2px',
      '5': '5px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '15': '15px',
      '20': '20px',
      '30': '30px',
    },
  })
);

module.exports = tailwindConfig;

```

#### todo 
- Add example with html
- Aad vscodeonline online links
- Demos
- more forms classes
- refactoring
- auto publishing npm
- add more tests
- add more components 

## Contributing

Anyone is welcome to [contribute](CONTRIBUTING.md), however, if you decide to get involved, please take a moment to review the guidelines:

* [Only one feature or change per pull request](CONTRIBUTING.md#only-one-feature-or-change-per-pull-request)
* [Write meaningful commit messages](CONTRIBUTING.md#write-meaningful-commit-messages)
* [Follow the existing coding standards](CONTRIBUTING.md#follow-the-existing-coding-standards)

## License

The code is available under the [MIT license](LICENSE.md).
