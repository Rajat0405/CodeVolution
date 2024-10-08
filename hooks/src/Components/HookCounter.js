import React, {useState} from 'react'

function HookCounter() {
    const initialCount = 0 ;
    const [count,setCount] = useState(0);

    function increment () {
        setCount(prevCount => prevCount +1);

    }

    function decrement () {
        setCount(prevCount => prevCount-1);
    }
  return (
    <div>
        Count : {count}
        <button onClick={increment} >Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
  )
}

export default HookCounter