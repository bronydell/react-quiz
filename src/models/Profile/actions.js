import AbstractAction from 'src/lib/AbstractAction'

class Action extends AbstractAction {
  _namespace = 'Profile'
}

export const logIn = new Action('logIn', {
  init: (email, password) => ({ email, password }),
  success: user => ({ user }),
  failure: error => ({ error }),
})

export const logOut = new Action('logOut')
export const confirmEmail = new Action('confirmEmail')

export const setScreen = new Action('setScreen', {
  success: screen => ({ screen }),
})

export const register = new Action('register', {
  init: (email, password, name) => ({ email, password, name }),
  success: user => ({ user }),
  failure: error => ({ error }),
})

export const getUser = new Action('getUser', {
  success: user => ({ user }),
  failure: error => ({ error }),
})
