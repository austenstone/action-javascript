import * as core from '@actions/core';
import * as github from '@actions/github';

const run = async () => {
  try {
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
  } catch (error) {
    core.setFailed(error instanceof Error ? error.message : JSON.stringify(error));
  }
};

export default run;
