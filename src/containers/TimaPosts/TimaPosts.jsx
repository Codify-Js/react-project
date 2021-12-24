import React from 'react';
import axios from 'axios';
import ContextButton from './ContextButton';
import PostsList from './PostsList';
import { TimaThemeContext, themes } from './theme-context.js';
import './index.scss'

const API_URL = 'https://jsonplaceholder.typicode.com';

export default class TimaPostsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      post: null,
      postId: null,
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
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
      <TimaThemeContext.Provider value={this.state.theme}>
        <div className="wrapper">
          <div className="header">
            Hello my name is Tima
          </div>
          <div><ContextButton onClick={this.toggleTheme} className={'button'}>Change Theme</ContextButton></div>
          <hr/>
          <div className="post">
            POST: {this.state.post ? this.state.post.title : 'No clicked post'}
          </div>
          <hr/>
          <PostsList list={this.state.list} onChange={this.handlePostClick}/>
        </div>
      </TimaThemeContext.Provider>
    )
  }
}