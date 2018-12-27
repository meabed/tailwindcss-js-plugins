const fs = require("fs");
const path = require("path");
const cssContent = fs.readFileSync(path.join(__dirname, "/../../../example/styles.dist.css")).toString();

it("find card classes in build file", () => {

  [
    /\.card {/i,
    /\.card-image {/i,
    /\.card-header {/i,
    /\.card-body {/i,
    /\.card-footer {/i

  ].map((v) => {
    expect(cssContent.search(v)).not.toBe(-1);
  });

});
