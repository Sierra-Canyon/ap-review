// Builds preview.html: the whole site in demo mode as one file (no Firebase), for sharing a look before setup.
// Run from the repo root: node tools/build-preview.mjs
import { build } from "esbuild";
import { readFileSync, writeFileSync } from "node:fs";

const js = await build({ entryPoints: ["app.js"], bundle: true, format: "iife", minify: true, write: false, target: "es2020" });
const css = readFileSync("styles.css", "utf8");
const page = `<title>CSP Quiz Review</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=JetBrains+Mono:wght@400;600&family=Pixelify+Sans:wght@500&display=swap">
<style>${css}</style>
<header class="bar" id="bar"></header>
<div class="demo-band" id="demoband" hidden>Demo mode: progress is kept in this browser only. Nothing reaches the class view.</div>
<main id="view"><p class="muted">Loading...</p></main>
<script>${js.outputFiles[0].text.replace(/<\/script/gi, "<\\/script")}</script>
`;
writeFileSync("preview.html", page);
console.log("wrote preview.html", (page.length / 1024).toFixed(0) + " KB");
