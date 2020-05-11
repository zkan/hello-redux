const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC') {
    return {
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD') {
    return {
      counter: state.counter + action.value
    }
  }
  return state
}

// Store
const store = createStore(rootReducer)
console.log(store.getState())

// Dispatching Action
store.dispatch({ type: 'INC' })
store.dispatch({ type: 'ADD', value: 10 })
console.log(store.getState())

// Subscription
