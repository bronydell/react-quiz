/* eslint-disable global-require, import/no-dynamic-require */

import { all, call } from 'redux-saga/effects'

import ProfileReducer from './Profile/reducer'
import ProfileSaga from './Profile/saga'
import CatalogReducer from './Catalog/reducer'
import CatalogSaga from './Catalog/saga'

export default {
  reducers: {
    profile: ProfileReducer,
    catalog: CatalogReducer,
  },
  sagas: function* sagas() {
    yield all([
      call(ProfileSaga),
      call(CatalogSaga),
    ])
  },
}
