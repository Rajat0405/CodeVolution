import React,{useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect (() => {
        
       console.log("useEffect call")
    },[name])

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={() => setCount(prevCount => prevCount +1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne