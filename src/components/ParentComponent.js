import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }

      this.greetparent = this.greetparent.bind(this)
    }

    greetparent (childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponents greetHandler={this.greetparent}/>
      </div>
    )
  }
}

export default ParentComponent