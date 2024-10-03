import React from 'react'

function FunctionClick() {

    function clickhandler (){
        console.log("btn click")
    }
  return (
    <div>
        <button onClick={clickhandler}>
            functional Click
        </button>
    </div>
  )
}

export default FunctionClick