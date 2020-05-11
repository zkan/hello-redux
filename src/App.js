import React from 'react'
import { connect } from 'react-redux'
import './App.css'

const Counter = (props) => <div>{props.ctr}</div>

const AddButton = (props) => (
  <>
    <button onClick={props.onIncrementCounter}>+</button>
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
const mapDisptachToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INC' }),
    onDecrementCounter: () => dispatch({ type: 'DEC' })
  }
}

const ConnectedAddButton = connect(null, mapDisptachToProps)(AddButton)

export default App
