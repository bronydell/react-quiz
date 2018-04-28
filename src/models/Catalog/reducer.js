import * as actions from './actions'

const initialState = {
  quizes: null,
  quiz: null,
}

export default (state = initialState, { type, payload }) => {
  console.log('Type: ', type, 'Payload: ', payload)
  switch (type) {
    case actions.fetchQuizes.SUCCESS_TYPE:
      return {
        ...state,
        quizes: payload.list,
      }
    case actions.setQuiz.SUCCESS_TYPE:
      return {
        ...state,
        quiz: payload.quiz,
      }

    default:
      return state
  }
}
