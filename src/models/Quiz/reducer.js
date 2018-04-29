import * as actions from './actions'

const initialState = {
  question: 0,
  progress: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.setQuestion.SUCCESS_TYPE:
      return {
        ...state,
        question: payload.id,
      }
    case actions.setProgress.SUCCESS_TYPE:
      return {
        ...state,
        progress: payload.progress,
      }
    case actions.resetStorage.SUCCESS_TYPE:
      return initialState
    default:
      return state
  }
}
