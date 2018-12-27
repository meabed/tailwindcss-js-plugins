const fs = require("fs");
const path = require("path");
const cssContent = fs.readFileSync(path.join(__dirname, "/../../../example/styles.dist.css")).toString();

it("find btn classes in build file", () => {

  [
    /\.btn {/i,
    /\.btn-sm {/i,
    /\.btn-lg {/i,
    /\.btn-black {/i,
    /\.btn-red {/i

  ].map((v) => {
    expect(cssContent.search(v)).not.toBe(-1);
  });

});
