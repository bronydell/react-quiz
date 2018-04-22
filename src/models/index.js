/* eslint-disable global-require, import/no-dynamic-require */

import { all, call } from 'redux-saga/effects'

import ProfileReducer from './Profile/reducer'
import ProfileSaga from './Profile/saga'

export default {
  reducers: {
    profile: ProfileReducer,
  },
  sagas: function* sagas() {
    yield all([
      call(ProfileSaga),
    ])
  },
}
