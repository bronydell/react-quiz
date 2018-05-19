import { all, call, put, takeEvery } from 'redux-saga/effects'
import { fetchMyQuizzes, fetchQuiz, putQuiz } from './api'
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
    yield put(actions.getQuiz.success(quiz))
  } catch (error) {
    console.log('Fetch Quiz error: ', error)
    yield put(actions.getQuiz.failure(error))
  }
}

function* sendQuiz({ payload }) {
  try {
    console.log('putQuiz: ', payload)
    yield putQuiz(payload.id, payload.quiz)
    yield put(actions.getQuiz.success(null))
  } catch (error) {
    console.log('Fetch Quiz error: ', error)
    yield put(actions.putQuiz.failure(error))
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
