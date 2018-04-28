import * as actions from './actions'

const initialState = {
  question: 0,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.setQuestion.SUCCESS_TYPE:
      return {
        ...state,
        question: payload.id,
      }

    default:
      return state
  }
}
