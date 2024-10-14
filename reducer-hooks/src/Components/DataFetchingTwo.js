import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
      switch(action.type) {
        case 'Fetch_Success' :
            return {
               loading: false,
               post: action.payload,
               error: ''
            }
        case 'Fetch_Error' : 
        return {
            loading : false,
            post: {},
            error: 'something went Wrong'
        }    

        default: 
        return state
      }
}

function DataFetchingTwo() {
    const[state,dispatch] = useReducer(reducer, initialState)

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(Response => {
            dispatch({type: 'Fetch_Success', payload: Response.data})
        })
        .catch(error => {
            dispatch({
                type: 'Fetch_Error'
            })
        })

    },[])


  return (
    <div>
        {state.loading ? 'Loading' : state.post.title}
        {state.error ? state.error : null}

    </div>
  )
}

export default DataFetchingTwo