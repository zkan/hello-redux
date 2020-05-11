const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value
      }
    default:
      return state
  }
}

// Store
const store = createStore(rootReducer)
console.log(store.getState())

// Dispatching Action
store.dispatch({ type: 'INC' })
store.dispatch({ type: 'ADD', value: 10 })
console.log(store.getState())

// Subscription
