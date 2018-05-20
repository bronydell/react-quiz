import * as actions from './actions'

const initialState = {
  user: undefined,
  error: null,
  screen: 'none',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.register.SUCCESS_TYPE:
    case actions.getUser.SUCCESS_TYPE:
    case actions.logIn.SUCCESS_TYPE:
      return {
        ...state,
        user: payload.user,
        error: null,
        screen: 'login',
      }
    case actions.logOut.SUCCESS_TYPE:
      return {
        ...state,
        user: null,
        error: null,
      }
    case actions.setScreen.SUCCESS_TYPE:
      return {
        ...state,
        screen: payload.screen,
      }
    case actions.register.FAILURE_TYPE:
    case actions.getUser.FAILURE_TYPE:
    case actions.logIn.FAILURE_TYPE:
      return {
        ...state,
        user: null,
        error: payload.error,
      }
    default:
      return state
  }
}
