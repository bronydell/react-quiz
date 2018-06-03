import { all, call, put, takeEvery } from 'redux-saga/effects'
import { setError } from 'src/models/Global/actions'

import { fetchMyQuizzes, fetchQuiz, putQuiz } from './api'
import * as actions from './actions'

function* getMyQuizzes() {
  try {
    const quizes = yield fetchMyQuizzes()
    yield put(actions.getMyQuizzes.success(quizes))
  } catch (error) {
    yield put(setError.success(error.toString()))
  }
}

function* getQuiz({ payload }) {
  try {
    const quiz = yield fetchQuiz(payload.id)
    yield put(actions.getQuiz.success(quiz))
  } catch (error) {
    yield put(setError.success(error.toString()))
  }
}

function* sendQuiz({ payload }) {
  try {
    yield putQuiz(payload.id, payload.quiz)
    yield put(actions.getQuiz.success(null))
  } catch (error) {
    yield put(setError.success(error.toString()))
  }
}

export default function* () {
  yield all([
    call(function* action() {
      yield takeEvery(actions.getMyQuizzes.INIT_TYPE, getMyQuizzes)
      yield takeEvery(actions.getQuiz.INIT_TYPE, getQuiz)
      yield takeEvery(actions.putQuiz.INIT_TYPE, sendQuiz)
    }),
  ])
}
