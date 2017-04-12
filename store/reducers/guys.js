import { actionTypes } from '../constants/action'

const NAME = 'guys'

const initialState = [
  {
    name: 'JimmyLv',
    age: 23
  }
]

function reducer(state = initialState,action) {
  const { type, payload } = action
  
  switch (type) {
    case actionTypes.SAY_HELLO_DONE:
      return [...payload]
    case actionTypes.SAY_HELLO_ERROR:
      console.warn('Failed to fetch guys list!', payload)
      return state
    default:
      return state
  }
}

export default { NAME, reducer }
