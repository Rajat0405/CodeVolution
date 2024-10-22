import React, { Component } from 'react'
import LifecycleB from './lifecycleB'

 class LifecycleA extends Component {
     
    constructor(props) {
      super(props)
    
      this.state = {
         nmae: 'Rajat'
      }
      console.log('lifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifecycleA componentdidMount')
    }




  render() {
    console.log('lifecycleA render')
    return (
      <div>
        LifecycleA
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA