import React from 'react'
import { connect } from 'react-redux'
import './App.css'

const Counter = (props) => <div>{props.ctr}</div>

const Buttons = (props) => (
  <>
    <button onClick={props.onIncrementCounterAsync}>+</button>
    <button onClick={props.onDecrementCounter}>-</button>
  </>
)

function App() {
  return (
    <div className='App'>
      <ConnectedCounter />
      <ConnectedAddButton />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { ctr: state.counter }
}

const ConnectedCounter = connect(mapStateToProps)(Counter)

// Defining mapDispatchToProps as a function
// const mapDisptachToProps = (dispatch) => {
//   return {
//     onIncrementCounter: () => dispatch({ type: 'INC' }),
//     onDecrementCounter: () => dispatch({ type: 'DEC' })
//   }
// }

// Defining mapDispatchToProps as an object
function onIncrementCounter() {
  return {
    type: 'INC'
  }
}

function onIncrementCounterAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(onIncrementCounter())
    }, 500)
  }
}

const onDecrementCounter = () => ({
  type: 'DEC'
})

const mapDisptachToProps = {
  onIncrementCounterAsync,
  onDecrementCounter
}

const ConnectedAddButton = connect(null, mapDisptachToProps)(Buttons)

export default App
