import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(1)

  const addValue = () => {
    setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)
  }

  const removeValue = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <>
    <h1>hello world</h1>
    <h2>counter value : {counter}</h2>

    <button
    onClick={addValue}
    >Add value</button>
    <br />
    <button
    onClick={removeValue}
    >remove value</button>
    </>
  )
}

export default App
