import * as actions from './actions'

const initialState = {
  error: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.setError.SUCCESS_TYPE:
      return {
        ...state,
        error: payload.error,
      }
    default:
      return state
  }
}
