import React, {useReducer} from 'react'

const initialState = {
    fistCounter : 0
}
const reducer = (state, action) => {
   switch(action.type) {
    case 'increment' :
        return {firstCounter : state.firstCounter + 1};
    case 'decrement' :
        return {firstCounter: state.firstCounter -1};
    case 'reset':
        return initialState
    default :
         return state            
   }

}

function REducerHooktwo() {

    const [count, dispatch ] = useReducer(reducer, initialState)


  return (
    <div>
        <div>Count - {count.firstCounter}</div>
        <button onClick={ () => dispatch ({type: 'increment'})}>Increment</button>
        <button onClick={ () => dispatch ({type : 'decrement'})}>decrement</button>
        <button onClick={ () => dispatch ({type:'reset'})}>Reset</button>

    </div>
)}

export default REducerHooktwo