import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import ReduxThunk from 'redux-thunk'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const initialState = {
  counter: 0
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INC':
//       return {
//         counter: state.counter + 1
//       }
//     case 'DEC':
//       return {
//         counter: state.counter - 1
//       }
//     default:
//       return state
//   }
// }

const reducer = createReducer(initialState, {
  INC: (state) => ({
    counter: state.counter + 1
  }),
  DEC: (state) => ({
    counter: state.counter - 1
  })
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk)))

const store = configureStore({
  reducer,
  middleware: [ReduxThunk]
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
