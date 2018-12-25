const fs = require('fs');
const path = require('path');
const cssContent = fs.readFileSync(path.join(__dirname, '/../../../example/styles.dist.css')).toString();

it('find card classes in build file', () => {

  [
    /\.-p-20 {/i,
    /\.-p-1 {/i,
    /\.-p-10 {/i,

  ].map((v) => {
    expect(cssContent.search(v)).not.toBe(-1);
  });

});
