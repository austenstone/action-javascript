# JavaScript Action Template

This repository serves as a [template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for JavaScript [Actions](https://docs.github.com/en/actions).
<br>For TypeScript see [austenstone/action-typescript](https://github.com/austenstone/action-typescript).

## ๐งโ๐ป Development
Use [nodemon](https://github.com/remy/nodemon) for a hot-reload dev environment.
```
npm run dev
```

## ๐จ Build
Build the project with [ncc](https://github.com/vercel/ncc).<br>The build artifacts will be stored in a single file `dist/index.mjs`.
```
npm run build
```

## ๐งช Test
Test the project with [jest](https://github.com/facebook/jest).
```
npm test
```

## ๐งน Lint
Linting is done with [eslint](https://github.com/eslint/eslint).
```
npm run lint
```

## ๐ Usage
[Create a workflow](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file) (eg: [`.github/workflows/run.yml`](.github/workflows/usage.yaml))

### Default Workflow
```yml
name: "Add to Project"
on:
  workflow_dispatch:

jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: austenstone/action-javascript@main
```

## โก๏ธ Input Settings
Various inputs are defined in [`action.yml`](action.yml):

| Name | Description | Default |
| --- | - | - |
| github&#x2011;token | Token to use to authorize. | ${{&nbsp;github.token&nbsp;}} |

## Further help
To get more help on the Actions see [documentation](https://docs.github.com/en/actions).
