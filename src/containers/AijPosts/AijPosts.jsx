import axios from 'axios';
import React from 'react';
const API_URL = 'https://jsonplaceholder.typicode.com';


export default class AijPostsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      post: null
    };

  }

  componentDidMount() {
    axios.get(`${API_URL}/posts`)
      .then((response) => {
        console.log('response', response.data);

      this.setState({
        list:response.data,
        post: null
      })

      this.handlePostClick = this.handlePostClick.bind(this)
  })
}

componentWillUnmount(){
}

handlePostClick(id) {
  axios.get(`${API_URL}/posts/${id}`)
  .then((response) => {
  this.setState({
    post: response.data
  })
})
}

  render() {

    return (
      <div className="container">
        <div className="container-header">
          Here is my list of posts
        </div>
        <div>
          POST: {this.state.post ? this.state.post.title: 'No clicked post'}
        </div>
        <div>
          {this.state.list.map(post =>
            <div onClick={() => this.handlePostClick(post.id)} key={post.id}>{post.id} ) {post.title}</div>)}
        </div>
      </div>
    )
  }
  }