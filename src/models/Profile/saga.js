import { all, call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

function* logIn() {
  // yield put(actions.updateColor.success())
}

function* register({ payload }) {
  // yield put(actions.updateColor.success())
  yield console.log(payload)
}

function* getUser() {
  // yield put(actions.updateColor.success())
}

export default function* () {
  yield all([
    call(function* color() {
      yield takeEvery(actions.logIn.INIT_TYPE, logIn)
      yield takeEvery(actions.register.INIT_TYPE, register)
      yield takeEvery(actions.getUser.INIT_TYPE, getUser)
    }),
  ])
}
