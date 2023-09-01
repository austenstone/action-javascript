const core = require('@actions/core');
const github = require('@actions/github');

const token = core.getInput('github-token');
const octokit = github.getOctokit(token);

(async () => {
    const {
      viewer: { login },
    } = await octokit.graphql(`{ 
      viewer { 
        login
      }
    }`);
    
    core.info(`Hello, ${login}!`);    
})();
