const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
  if (action.type == 'INC') {
    return {
      counter: state.counter + action.payload
    }
  }
  return state
}

// Store
const store = createStore(reducer)

// Subscription
store.subscribe(() => {
  console.log('subscribe', store.getState())
})

// Action (to be dispatched)
// action มันจะมี type กับ payload หรือ data
const addCounter = () => {
  return {
    type: 'INC',
    payload: 1
  }
}

// console.log('before', store.getState())
store.dispatch(addCounter())
// console.log('after', store.getState())
