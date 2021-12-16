import axios from 'axios';
import React from 'react';
import GulzhanContextButton from './gulzhan-context-button';
import { GulzhanContext, themes } from './gulzhan-context';
import PostList from './PostList';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default class GulzhanPostsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      post: null,
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
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
      <GulzhanContext.Provider value={this.state.theme}className="container">
        <div className="container-header">
          Here is my list of posts
        </div>
        <div>
          <GulzhanContextButton className={'button'} onClick={this.toggleTheme}>
            BUTTON
          </GulzhanContextButton>
        </div>
        <div>
          POST: {this.state.post ? this.state.post.title: 'No clicked post'}
        </div>
        <hr/>
        <PostList list={this.state.list} onChange={this.handlePostClick}/>

      </GulzhanContext.Provider>
    )
  }
  }
