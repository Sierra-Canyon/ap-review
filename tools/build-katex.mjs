// Bundles KaTeX into vendor/katex.js (one ES module, no CDN). The site renders math to MathML, which browsers draw
// themselves, so no KaTeX stylesheet or fonts are needed.
// Run from the repo root after `npm install`: node tools/build-katex.mjs
import { build } from "esbuild";
import { writeFileSync, mkdirSync } from "node:fs";

mkdirSync("tools/.tmp", { recursive: true });
writeFileSync("tools/.tmp/katex-entry.js", `export { default } from "katex";\n`);
await build({
  entryPoints: ["tools/.tmp/katex-entry.js"],
  bundle: true, format: "esm", minify: true, target: "es2020",
  outfile: "vendor/katex.js",
  legalComments: "eof",
});
console.log("wrote vendor/katex.js");
