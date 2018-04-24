import { all, call, put, takeEvery } from 'redux-saga/effects'
import { getQuizes } from './api'
import * as actions from './actions'

function* fetchQuizes({ payload }) {
  try {
    yield put(actions.fetchQuizes.success(yield getQuizes(payload.lastItem)))
  } catch (error) {
    yield put(actions.fetchQuizes.failure(error))
  }
}

export default function* () {
  yield all([
    call(function* action() {
      yield takeEvery(actions.fetchQuizes.INIT_TYPE, fetchQuizes)
    }),
  ])
}
