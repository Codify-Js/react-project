import React from 'react';
import { TimaThemeContext } from './theme-context.js';
import ContextButton from './ContextButton';

class PostsList extends React.Component {
  render() {
    const theme = this.context;
    return (
      <div style={{backgroundColor: theme.background, color: theme.foreground}}>
        <ContextButton>Another Button</ContextButton>
        {this.props.list?.map((post, index) => { 
          return (
            <div key={index} onClick={() => this.props.onChange(post.id)}>{post.id} | {post.title}</div>
          )
        })}
      </div>
    )
  }
}

PostsList.contextType = TimaThemeContext;

export default PostsList