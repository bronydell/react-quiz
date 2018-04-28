import * as actions from './actions'

const initialState = {
  quizes: null,
}

export default (state = initialState, { type, payload }) => {
  console.log('Type: ', type, 'Payload: ', payload)
  switch (type) {
    case actions.fetchQuizes.SUCCESS_TYPE:
      return {
        ...state,
        quizes: payload.list,
      }

    default:
      return state
  }
}
