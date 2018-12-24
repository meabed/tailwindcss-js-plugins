const fs = require('fs');
const path = require('path');
const cssContent = fs.readFileSync(path.join(__dirname, '/../../../example/styles.dist.css')).toString();

it('find card classes in build file', () => {

  [
    /\.spaced-x-1 > \* {/i,
    /\.spaced-x-1 > \*:last-child {/i,
    /\.spaced-xy-1 > \* {/i,
    /\.spaced-xy-1 > \*:last-child {/i,

  ].map((v) => {
    expect(cssContent.search(v)).not.toBe(-1);
  });

});
