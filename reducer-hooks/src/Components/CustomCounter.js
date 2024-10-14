import React from 'react'
import useCounter from '../Hooks/useCounter'

function CustomCounter() {
    const[count, increment, decrement, reset] = useCounter()
  return (
    <div>
        <h2>Count = { count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomCounter