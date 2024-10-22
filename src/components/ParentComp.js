import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'


 class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "rajat"
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'rajat'
            })
        }, 2000)
    }
  render() {
    console.log("--------------------ParentComponent-----------------")
    return (
      <div>ParentComp
        <RegularComp name={this.state.name}/>
        <PureComp name= {this.state.name} />
      </div>
    )
  }
}

export default ParentComp