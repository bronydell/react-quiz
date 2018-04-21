import * as actions from './actions'

const initialState = {
  color: 'red',
}

export default (state = initialState, { type }) => {
  switch (type) {
    case actions.updateColor.SUCCESS_TYPE:
      return {
        ...state,
        color: state.color === 'red' ? 'green' : 'red',
      }

    default:
      return state
  }
}
