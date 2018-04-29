import { all, call, put, takeEvery } from 'redux-saga/effects'
import firebase from 'firebase'
import * as actions from './actions'
import * as persistence from './persistence'

function* logIn({ payload }) {
  try {
    const user = yield firebase.auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
    yield persistence.setLogin(payload.email)
    yield persistence.setPassword(payload.password)
    yield put(actions.logIn.success(user))
  } catch (error) {
    yield put(actions.logIn.failure(error))
  }
}

function* register({ payload }) {
  // yield put(actions.updateColor.success())
  try {
    const user = yield firebase.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
    user.updateProfile({
      displayName: payload.name,
    })
    yield firebase.database().ref(`users/${user.uid}`).set({
      quizes: 0,
      points: 0,
      progress: {},
    })
    yield persistence.setLogin(payload.email)
    yield persistence.setPassword(payload.password)
    yield put(actions.register.success(user))
  } catch (error) {
    yield put(actions.register.failure(error))
  }
}

function* getUser() {
  try {
    const email = yield persistence.getLogin()
    const password = yield persistence.getPassword()
    const user = yield firebase.auth()
      .signInWithEmailAndPassword(email, password)
    yield put(actions.getUser.success(user))
  } catch (error) {
    yield persistence.setLogin(null)
    yield persistence.setPassword(null)
    yield put(actions.getUser.success(null))
  }
}

function* logOut() {
  try {
    yield firebase.auth().signOut()
    yield persistence.setLogin(null)
    yield persistence.setPassword(null)
    yield put(actions.logOut.success())
  } catch (error) {
    yield put(actions.logOut.failure())
  }
}

export default function* () {
  yield all([
    call(function* color() {
      yield takeEvery(actions.logIn.INIT_TYPE, logIn)
      yield takeEvery(actions.register.INIT_TYPE, register)
      yield takeEvery(actions.getUser.INIT_TYPE, getUser)
      yield takeEvery(actions.logOut.INIT_TYPE, logOut)
    }),
  ])
}
