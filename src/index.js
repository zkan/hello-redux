import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  counter: 0
}

// const reducer = (state = initialState, action) => {
//   console.log(action)
//   switch (action.type) {
//     case 'INC':
//       return {
//         counter: state.counter + action.payload
//       }
//     default:
//       state
//   }
// }

const reducer = createReducer(initialState, {
  INC: (state, action) => ({
    counter: state.counter + action.payload
  })
})

const store = configureStore({
  reducer
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
