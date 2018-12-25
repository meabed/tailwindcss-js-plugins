export const negativePadding = function negativePadding({ values } = {}) {
  return function tailwindNegativePadding({ addUtilities, config }) {

    let css = {};
    if (!values) {
      values = config('padding');
      delete values['auto'];
    }

    Object.keys(values).forEach(name => {
      let modifier = name;
      let size = values[name];
      css[`.-p-${ modifier }`] = { 'padding': `${ size }` };
      css[`.-py-${ modifier }`] = { 'padding-top': `${ size }`, 'padding-bottom': `${ size }` };
      css[`.-px-${ modifier }`] = { 'padding-left': `${ size }`, 'padding-right': `${ size }` };
      css[`.-pt-${ modifier }`] = { 'padding-top': `${ size }` };
      css[`.-pr-${ modifier }`] = { 'padding-right': `${ size }` };
      css[`.-pb-${ modifier }`] = { 'padding-bottom': `${ size }` };
      css[`.-pl-${ modifier }`] = { 'padding-left': `${ size }` };

    });

    addUtilities(css, ['responsive']);
  };
};
