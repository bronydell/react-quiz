import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import firebase from 'firebase'

import { setError } from 'src/models/Global/actions'

import { setProgress, getProgress, getQuiz } from './api'
import * as actions from './actions'

const getProgressFromStorage = state => state.quiz.progress

function* syncProgress() {
  try {
    if (firebase.auth().currentUser) {
      const progress = yield select(getProgressFromStorage)
      setProgress(firebase.auth().currentUser.uid, progress)
    }
  } catch (error) {
    yield put(setError.success(error.toString()))
  }
}

function* fetchProgress() {
  try {
    if (firebase.auth().currentUser) {
      const progress = yield getProgress(firebase.auth().currentUser.uid)
      yield put(actions.setQuiz.init(progress.quizId))
      yield put(actions.setProgress.success(progress))
      yield put(actions.setQuestion.success(progress.question))
    }
  } catch (error) {
    yield put(setError.success(error.toString()))
  }
}

function* setQuiz({ payload }) {
  try {
    const quiz = yield getQuiz(payload.id)
    yield put(actions.setQuiz.success(quiz))
  } catch (error) {
    yield put(setError.success(error.toString()))
  }
}

function* resetProgress() {
  try {
    if (firebase.auth().currentUser) {
      setProgress(firebase.auth().currentUser.uid, null)
    }
  } catch (error) {
    yield put(setError.success(error.toString()))
  }
}

export default function* () {
  yield all([
    call(function* watch() {
      yield takeEvery(actions.syncProgress.INIT_TYPE, syncProgress)
      yield takeEvery(actions.resetProgress.INIT_TYPE, resetProgress)
      yield takeEvery(actions.getProgress.INIT_TYPE, fetchProgress)
      yield takeEvery(actions.setQuiz.INIT_TYPE, setQuiz)
    }),
  ])
}
