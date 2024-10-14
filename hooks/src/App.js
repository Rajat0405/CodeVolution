import React from 'react';


import logo from './logo.svg';

import './App.css';
import ClassCounter from './Components/ClassCounter';
import FunCounter from './Components/FunCounter';
import HookCounter from './Components/HookCounter';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterOne from './Components/HookCounterOne';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC';
import ReducerHook from './Components/ReducerHook';
import REducerHooktwo from './Components/REducerHooktwo';
import ComponentG from './Components/ComponentG';
import ComponentH from './Components/ComponentH';
import ComponentI from './Components/ComponentI';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <FunCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterOne/> */}
      {/* <HookMoue/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}

      {/* <UserContext.Provider value={'Rajat'}>
        <ChannelContext.Provider value={'Panwar'}>

           <ComponentC/>

        </ChannelContext.Provider>

      </UserContext.Provider> */}
      {/* <ReducerHook/> */}
      {/* <REducerHooktwo/> */}
      <ComponentG/>
      <ComponentH/>
      <ComponentI/>
      
    </div>
  );
}

export default App;
