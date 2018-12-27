const fs = require("fs");
const path = require("path");
const cssContent = fs.readFileSync(path.join(__dirname, "/../../../example/styles.dist.css")).toString();

it("find card classes in build file", () => {

  [
    /\.grid {/i,
    /\.grid-dense {/i,
    /\.grid-gap-0 {/i

  ].map((v) => {
    expect(cssContent.search(v)).not.toBe(-1);
  });

});
