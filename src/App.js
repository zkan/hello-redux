import React from 'react'
import logo from './logo.svg'
import './App.css'

const Counter = () => <div>5</div>

const AddButton = () => <button>+</button>

function App() {
  return (
    <div className='App'>
      <Counter />
      <AddButton />
    </div>
  )
}

export default App
