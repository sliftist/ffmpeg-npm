#!/usr/bin/env node
let path = require("./index.js").getBinaryPath("ffmpeg");
let args = process.argv.slice(2);
require("child_process").execFileSync(path, args, { stdio: "inherit" });
