import * as actions from './actions'

const initialState = {
  user: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.register.SUCCESS_TYPE:
    case actions.getUser.SUCCESS_TYPE:
    case actions.logIn.SUCCESS_TYPE:
      return {
        ...state,
        user: payload.user,
      }
    default:
      return state
  }
}
