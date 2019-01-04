<p align="center">
  <img src="https://github.com/serverless/assets/blob/master/Icon/Serverless_lockup_icon-red.png?raw=true" width="50">
</p>

# Serverless Boilerplate
[![](https://img.shields.io/circleci/project/github/krzyurb/sls-boilerplate/master.svg)](https://circleci.com/gh/krzyurb/sls-boilerplate)
![](https://img.shields.io/badge/node-8.10-brightgreen.svg)
[![](https://img.shields.io/badge/Serverless-Framework-red.svg)](https://serverless.com/framework/)

## Using as a template

You can use that boilerplate when generating new
Serverless project using serverless cli:

```
$ serverless create --template-url https://github.com/krzyurb/sls-boilerplate --name your-project-name
$ cd your-project-name
$ yarn
```

## Installation

```
$ cp env.yml.example env.yml
$ yarn install
```

## Testing

This project uses [jest](https://jestjs.io/) and [sinonjs](https://sinonjs.org/) for tests.

To start test suite simply run:

```
$ yarn test
```

An integration test suite can be run using:

```
$ yarn test:int
```

## Serverless plugins

* [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack)
* [serverless-offline](https://github.com/dherault/serverless-offline)

## CI/CD

CI/CD workflow for this project is done using CircleCI.

* `production` branch deploys production
* `master` branch deploys an app for staging for QA
* code pushed to `integration` creates a test environment and runs integration tests
