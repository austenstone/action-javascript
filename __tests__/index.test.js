const process = require('process');
const cp = require('child_process');
const path = require('path');
const { test } = require('@jest/globals');

const addInput = (key, value) => process.env[`INPUT_${key.replace(/ /g, '-').toUpperCase()}`] = value

const input = {
  'github-token': process.env.GITHUB_TOKEN,
  organization: process.env.ORGANIZATION || 'octoaustenstone'
}

test('test run', () => {
  Object.entries(input).forEach(([key, value]) => addInput(key, value));
  process.env['GITHUB_REPOSITORY'] = `austenstone/${path.basename(process.cwd())}`;
  const np = process.execPath;
  const ip = path.join(__dirname, '..', 'dist', 'index.mjs');
  const options = {
    env: process.env,
  };
  console.log(cp.execFileSync(np, [ip], options).toString());
});
