import React from "react"
import { GulzhanContext } from "./gulzhan-context"
import GulzhanContextButton from "./gulzhan-context-button";

class PostList extends React.Component {
    render(){
        const theme = this.context;
        return (
            <div style={{backgroundColor: theme.background, color: theme.foreground}}>
              {this.props.list?.map((post, index) => { 
                return (
                  <div key={index} onClick={() => this.props.onChange(post.id)}>{post.id} | {post.title}</div>
                )
              })}
            </div>
        )
    }
}

PostList.contextType = GulzhanContext;

export default PostList