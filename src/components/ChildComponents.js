import React from 'react'

function ChildComponents(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('child')}>greet Parent</button>
    </div>
  )
}

export default ChildComponents