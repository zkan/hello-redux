import React from 'react'
import { connect } from 'react-redux'
import './App.css'

const Counter = (props) => <div>{props.ctr}</div>

const AddButton = (props) => <button onClick={props.onIncrementCounter}>+</button>

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

const mapDisptachToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INC' })
  }
}

const ConnectedAddButton = connect(null, mapDisptachToProps)(AddButton)

export default App
