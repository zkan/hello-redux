import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { createAction } from '@reduxjs/toolkit'

const Counter = (props) => {
  return (
    <div>
      <div>{props.mappedCounter}</div>
      <button onClick={() => props.increment(3)}>click me</button>
    </div>
  )
}

const increment = createAction('INC')

// const mapDispatchToProps = {
//   increment
// }

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value))
  }
}

const mapStateToProps = (state) => {
  return {
    mappedCounter: state.counter
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

const Buttons = (props) => (
  <>
    <button onClick={() => props.increment(5)}>+</button>
    <button>-</button>
  </>
)

// const INC = 'INC'
// const increment = (number) => {
//   return {
//     type: INC,
//     payload: number
//   }
// }

const connectFunc = connect(null, mapDispatchToProps)
const ConnectedButtons = connectFunc(Buttons)

function App() {
  return (
    <div className='App'>
      <ConnectedCounter />
      <ConnectedButtons />
    </div>
  )
}

export default App
