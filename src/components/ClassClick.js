import React, { Component } from 'react'

export class ClassClick extends Component {
    ClickHandler () {
        console.log('class btn click')
    }
  render() {
    return (
      <div>
        <button onClick={this.ClickHandler}>Class Click</button>
      </div>
    )
  }
}

export default ClassClick