import React, {useState} from 'react'

function HookCounterThree() {

    const [name, setName] = useState({
        firstname: '',
        lastname: ''
    })
  return (
    <form>
        <input type='text' value={name.firstname} onChange={e => setName({firstname: e.target.value})}></input>
        <input type='text' value={name.lastname} onChange={e => setName({lastname: e.target.value})}></input>
        <h2>FirstName : {name.firstname}</h2>
        <h2>LastName : {name.lastname}</h2>
    </form>
  )
}

export default HookCounterThree