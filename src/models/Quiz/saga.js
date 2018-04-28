import { all, call, put, takeEvery } from 'redux-saga/effects'
import { getQuizes, getQuiz } from './api'
import * as actions from './actions'

function* fetchQuizes({ payload }) {
  try {
    const quizes = yield getQuizes(payload.lastItem)
    yield put(actions.fetchQuizes.success(quizes))
  } catch (error) {
    yield put(actions.fetchQuizes.failure(error))
  }
}

function* setQuiz({ payload }) {
  try {
    const quiz = yield getQuiz(payload.id)
    console.log('Fetched Quiz: ', quiz)
    yield put(actions.setQuiz.success(quiz))
  } catch (error) {
    yield put(actions.setQuiz.failure(error))
  }
}

export default function* () {
  yield all([
    call(function* action() {
      yield takeEvery(actions.fetchQuizes.INIT_TYPE, fetchQuizes)
      yield takeEvery(actions.setQuiz.INIT_TYPE, setQuiz)
    }),
  ])
}
