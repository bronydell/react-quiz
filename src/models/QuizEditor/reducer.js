import * as actions from './actions'

const initialState = {
  myQuizzes: null,
  quiz: null,
  question: null,
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
        quiz: payload.quiz,
      }
    case actions.editQuestion.SUCCESS_TYPE:
      return {
        ...state,
        question: payload.question,
      }

    default:
      return state
  }
}
