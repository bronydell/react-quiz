# exan-mobile

[![Status of develop branch][develop badge]][develop CI] [![Status of master branch][master badge]][master CI]

*This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).*

* [Features](#features)
* [Development](#development)
* [Debugging](#debugging)
* [Code Organization](#code-organization)

## Features

Here is a list of main features under the hood.

* [Expo SDK](https://docs.expo.io)
* [Pug](https://pugjs.org)
* [Styled-Components](https://www.styled-components.com/)
* [Redux](https://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/)
* [React Navigation](https://reactnavigation.org/)
* [Jest](https://facebook.github.io/jest/) & [Enzyme](http://airbnb.io/enzyme/)

Keep `.env` up-to-date, otherwise your app will be crashed. We use [react-native-dotenv](https://github.com/zetachang/react-native-dotenv) to handle environment variables.

## Development

Install [yarn](https://yarnpkg.com/en/) before continue.

* Install dependencies
  ```
  yarn
  ```

* Start the project (it uses Expo XDE)
  ```
  yarn start
  ```

  You can directly start android or ios by executing `yarn open:android` or `yarn open:ios`.

* Run tests
  ```
  yarn test --watch
  ```

* Lint codebase
  ```
  yarn lint
  ```

  Or you can lint styles and javascript separately by `yarn lint:styles` and `yarn lint:js`.

## Debugging

Install [react-native-debugger](https://github.com/jhen0409/react-native-debugger). Then open it on port 19001. Or you can use our alias for this:

```
yarn debugger
```

## Code Organization

Use issues to keep technical debt.

[develop badge]: https://img.shields.io/circleci/token/:token/project/github/:owner/:repo/develop.svg?style=flat-square&label=develop%20build
[develop CI]: https://circleci.com/gh/:owner/:repo/tree/develop
[master badge]: https://img.shields.io/circleci/token/:token/project/github/:owner/:repo/master.svg?style=flat-square&label=master%20build
[master CI]: https://circleci.com/gh/:owner/:repo/tree/master
