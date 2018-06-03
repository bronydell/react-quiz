import { all, call, put, takeEvery } from 'redux-saga/effects'
import { setError } from 'src/models/Global/actions'
import { getQuizes } from './api'
import * as actions from './actions'

function* fetchQuizes({ payload }) {
  try {
    yield put(actions.setLoading.success(true))
    const quizes = yield getQuizes(payload.filterText)
    yield put(actions.fetchQuizes.success(quizes))
  } catch (error) {
    yield put(setError.success(error.toString()))
  }
  yield put(actions.setLoading.success(false))
}

export default function* () {
  yield all([
    call(function* action() {
      yield takeEvery(actions.fetchQuizes.INIT_TYPE, fetchQuizes)
    }),
  ])
}
