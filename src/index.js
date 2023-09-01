import * as core from '@actions/core';
import * as github from '@actions/github';

const token = core.getInput('github-token');
const octokit = github.getOctokit(token);

const {
  viewer: { login },
} = await octokit.graphql(`{ 
  viewer { 
    login
  }
}`);

core.info(`Hello, ${login}!`);

export default run;
