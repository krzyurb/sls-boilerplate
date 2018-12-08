# Serverless Boilerplate

## Using as template

You can use that boilerplate when generating new
serverless project using serverless cli:

```
$ serverless create --template-url https://github.com/krzyurb/sls-boilerplate --name your-project-name
cd your-project-name
```

## Installation

```
$ cp env.yml.example env.yml
$ yarn install
```

## Testing

This project uses [jest](https://jestjs.io/) and [sinonjs](sinonjs) for tests.

To start test suite simply run:

```
$ yarn test
```

## Serverless plugins

* [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack)
* [serverless-offline](https://github.com/dherault/serverless-offline)
