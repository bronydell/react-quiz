import * as actions from './actions'

const initialState = {
  data: null,
}

export default (state = initialState, { type, payload }) => {
  console.log('Type: ', type, 'Payload: ', payload)
  switch (type) {
    case actions.fetchQuizes.success:
      return {
        ...state,
        data: payload.data,
      }

    default:
      return state
  }
}
