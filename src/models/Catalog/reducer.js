import * as actions from './actions'

const initialState = {
  quizes: null,
  quiz: null,
  loading: false,
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
    case actions.setLoading.SUCCESS_TYPE:
      return {
        ...state,
        loading: payload.loading,
      }

    default:
      return state
  }
}
