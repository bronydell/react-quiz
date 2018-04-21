import { all, call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

function* changeColor() {
  yield put(actions.updateColor.success())
}

export default function* () {
  yield all([
    call(function* color() {
      yield takeEvery(actions.updateColor.INIT_TYPE, changeColor)
    }),
  ])
}
