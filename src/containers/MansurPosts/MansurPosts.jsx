import React from 'react';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default class MansurPostsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      post: null,
      postId: null
    };

    this.handlePostClick = this.handlePostClick.bind(this);
  }

  componentDidMount() {
    axios.get(`${API_URL}/posts`)
      .then((response) => {
        this.setState({
          list: response.data
        })
      })
  }

  componentWillUnmount() {
    
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.postId === prevState.postId) return;
    
    if (this.state.postId) {
      axios.get(`${API_URL}/posts/${this.state.postId}`)
        .then((response) => {
          this.setState({
          post: response.data
        })
      })
    }
  }

  handlePostClick(id) {
     this.setState({postId: id})
  }

  render() {
    
    return (
      <div className="container">
        <div className="container-header">
          Hello my name is Mansur
        </div>
        <hr/>
        <div>
          POST: {this.state.post ? this.state.post.title : 'No clicked post'}
        </div>
        <hr/>
        <div>
          {this.state.list.map((post, index) => { 
            return (
              <div key={index} onClick={() => this.handlePostClick(post.id)}>{post.id} | {post.title}</div>
            )
          })}
        </div>
      </div>
    )
  }
}