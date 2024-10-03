import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/message';
import Counter from './components/counter';
import FuctionClick from './components/functionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

class App extends Component {
  render() {
    return (
      <div>
        {/* Hello World!!
        <Greet/>
        <Welcome/>
        <Hello/> */}
        {/* <Greet name="raj" heroname="rule">
          <button>Action</button> </Greet>
        <Greet name="raja" heroname="king"/>
        <Greet name="rajat" heroname="GOAT"/>
        <Welcome name="hii"/>
        <Welcome name="hello"/>
        <Welcome name="hey"/> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <FuctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        <NameList/>

      </div>
    )
  }
  
}

export default App;
