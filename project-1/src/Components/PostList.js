import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {

  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.setState({posts :res.data })
    })
    .catch( error => {
      console.log(error)
    })
  }
  render() {
    const { posts} = this.state
    return (
      <div>
        <h2>
          {
            posts.map(post => <div key={post.id}>{post.title}</div>)
          }
        </h2>
      </div>
    )
  }
}

export default PostList