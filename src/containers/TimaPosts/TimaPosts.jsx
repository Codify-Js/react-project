import React from 'react'
import axios from 'axios'
// const API_URL = 'https://jsonplaceholder.typicode.com'

export default class TimaPostsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list:[],
      post:null
    }
    this.handlePostClick = this.handlePostClick.bind(this)
  };


componentDidMount(){
  axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
      this.setState({
        list: response.data
      })
    })
}

handlePostClick(id){
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      this.setState({
        post: response.data
      })
    })
}

  render() {
      return(
          <div className="container">
              <div className="container-header">
                  Hello my name is Tima
              </div>
              <div>
                {this.state.post?.title}
              </div>
              <div>
                {this.state.list.map((post , index ) => {
                  return (
                    <div onClick={() => this.handlePostClick(post.id)} key={post.id}>{post.id} | {post.title}</div>
                  )
                })}
              </div>
          </div>
      )
  }

}
   

 
