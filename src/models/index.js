/* eslint-disable global-require, import/no-dynamic-require */

import { all, call } from 'redux-saga/effects'

import WelcomeReducer from './Welcome/reducer'
import WelcomeSaga from './Welcome/saga'

export default {
  reducers: {
    welcome: WelcomeReducer,
  },
  sagas: function* sagas() {
    yield all([
      call(WelcomeSaga),
    ])
  },
}
