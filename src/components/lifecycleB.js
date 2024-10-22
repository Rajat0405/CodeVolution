import React, { Component } from 'react'

 class LifecycleB extends Component {
     
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Rajat'
      }
      console.log('lifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('lifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifecycleB componentdidMount')
    }




  render() {
    console.log('lifecycleB render')
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB