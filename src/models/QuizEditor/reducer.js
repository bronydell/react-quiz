import * as actions from './actions'

const initialState = {
  myQuizzes: null,
  currentQuiz: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.getMyQuizzes.SUCCESS_TYPE:
      return {
        ...state,
        myQuizzes: payload.list,
      }
    case actions.getQuiz.SUCCESS_TYPE:
      return {
        ...state,
        currentQuiz: payload.quiz,
      }

    default:
      return state
  }
}
