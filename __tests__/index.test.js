const process = require('process');
const cp = require('child_process');
const path = require('path');
const { test } = require('@jest/globals');

test('test run', () => {
  process.env['INPUT_GITHUB-TOKEN'] = process.env.GITHUB_TOKEN;
  const np = process.execPath;
  const ip = path.join(__dirname, '..', 'dist', 'index.mjs');
  const options = {
    env: process.env,
  };
  console.log(cp.execFileSync(np, [ip], options).toString());
});
