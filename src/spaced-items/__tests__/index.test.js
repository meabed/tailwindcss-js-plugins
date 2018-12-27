const fs = require("fs");
const path = require("path");
const cssContent = fs.readFileSync(path.join(__dirname, "/../../../example/styles.dist.css")).toString();

it("find card classes in build file", () => {

  [
    /\.spd-x-10 > \* {/i,
    /\.spd-x-10 > \*:last-child {/i,
    /\.spd-xy-5 > \* {/i,
    /\.spd-xy-20 > \*:last-child {/i

  ].map((v) => {
    expect(cssContent.search(v)).not.toBe(-1);
  });

});
