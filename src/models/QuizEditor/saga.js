import { all, call, put, takeEvery } from 'redux-saga/effects'
import { fetchMyQuizzes, fetchQuiz } from './api'
import * as actions from './actions'

function* getMyQuizzes() {
  try {
    const quizes = yield fetchMyQuizzes()
    yield put(actions.getMyQuizzes.success(quizes))
  } catch (exception) {
    console.log(exception)
    yield put(actions.getMyQuizzes.failure(exception))
  }
}

function* getQuiz({ payload }) {
  try {
    const quiz = yield fetchQuiz(payload.id)
    console.log('Fetched Quiz: ', quiz)
    yield put(actions.getQuiz.success(quiz))
  } catch (error) {
    yield put(actions.getQuiz.failure(error))
  }
}

export default function* () {
  yield all([
    call(function* action() {
      yield takeEvery(actions.getMyQuizzes.INIT_TYPE, getMyQuizzes)
      yield takeEvery(actions.getQuiz.INIT_TYPE, getQuiz)
    }),
  ])
}
