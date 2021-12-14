import React from "react"
import { GulzhanContext } from "./gulzhan-context"

class PostList extends React.component {
    render(){
        return (
            <div>
            {this.props.list.map(post =>
              <div onClick={() => this.props.handlePostClick(post.id)} key={post.id}>{post.id} ) {post.title}</div>)}
          </div>
        )
    }
}

PostList.

export default PostList