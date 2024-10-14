import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';
import Counter from './Components/Counter';
import FocusInput from './Components/FocusInput';
import HookTimer from './Components/HookTimer';
import DocTitleOne from './Components/DocTitleOne';
import DocTitleTwo from './Components/DocTitleTwo';
import CustomCounter from './Components/CustomCounter';
import UserForm from './Components/UserForm';
import IntervalHookCounter from './Components/IntervalHookCounter';
// import React ,{ useReducer } from 'react';

// import ComponentA from "./Components/ComponentA";
// import ComponentB from "./Components/ComponentB";
// import ComponentC from "./Components/ComponentC";

// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//    switch(action) {
//     case 'increment' :
//         return state +1;
//     case 'decrement' :
//         return state -1;
//     case 'reset':
//         return initialState
//     default :
//          return state            
//    }

// }


function App() {
  // const [count, dispatch] = useReducer(reducer,initialState);
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    //   <div className="App">
    //     Count - {count}
    //   <ComponentA/>
    //   <ComponentB/>
    //   <ComponentC/>
    // </div>

    // </CountContext.Provider>



    <div>
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <Counter/> */}
      {/* <FocusInput/> */}
      {/* <HookTimer/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <CustomCounter/> */}
      {/* <UserForm/> */}
      <IntervalHookCounter/>
    </div>
    
  );
}

export default App;
