<p align="center">
  <img src="https://github.com/serverless/assets/blob/master/Icon/Serverless_lockup_icon-red.png?raw=true" width="50">
</p>

# Serverless Boilerplate
[![](https://img.shields.io/circleci/project/github/krzyurb/sls-boilerplate/master.svg)](https://circleci.com/gh/krzyurb/sls-boilerplate)
[![](https://img.shields.io/badge/node-8.10-brightgreen.svg)](https://github.com/krzyurb/sls-boilerplate/blob/master/package.json)
[![](https://img.shields.io/badge/Serverless-Framework-red.svg)](https://serverless.com/framework/)

## Using as a template

You can use that boilerplate when generating new
Serverless project using serverless cli:

```
$ serverless create --template-url https://github.com/krzyurb/sls-boilerplate --name your-project-name
$ cd your-project-name
$ yarn
```

## Installation and development

```
$ yarn install
$ cp .env.example .env
```

The application can be run locally (by default on 8080 portn) using:

```
$ yarn offline
```

## Testing

This project uses [jest](https://jestjs.io/) and [sinonjs](https://sinonjs.org/) for tests.

To start (unit and integration) test suite simply run:

```
$ yarn test
```

Tests are divided into three modules:
* Unit
* Integration - to test handlers locally
* Acceptance - to test endpoints on the deployed test environment

You can run them using commands:

```
$ yarn test:unit
$ yarn test:int
$ yarn test:acc
```

## CI/CD

CI/CD workflow for this project is done using CircleCI.

* `master` branch deploys an app for staging for QA
* `production` branch deploys production
* `acceptance` branch creates a test environment and runs an acceptance test suite

To deploy environment for developer use command:

```
$ yarn deploy:local
```

### Secrets

All secrets are stored in [AWS SSM Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html).

You can acces them using:
```
$ yarn secret:get
$ yarn secret:set
$ yarn secret:list
```

## Generators

Project uses [plopjs](https://plopjs.com/) for code generators. It allows e.g. to add new handlers.
To run generator use:

```
$ yarn generator
```

## Serverless plugins

* [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack)
* [serverless-offline](https://github.com/dherault/serverless-offline)
