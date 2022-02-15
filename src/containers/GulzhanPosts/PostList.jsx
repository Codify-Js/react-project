import React from "react"
import { GulzhanContext } from "./gulzhan-context"
import GulzhanContextButton from "./gulzhan-context-button";

class PostList extends React.Component {
  render() {
    const theme = this.context;
    return (
      <Container style={{backgroundColor: theme.background, color: theme.foreground}} >
        <ContextButton>Another Button</ContextButton>
        {this.props.list?.map((post, index) => { 
          return (
            <Row key={index} onClick={() => this.props.onChange(post.id)}>
              <Col sm={1}>{post.id}</Col> 
              <Col sm={11}>{post.title}</Col>
            </Row>
          )
        })}
      </Container>
    )
  }
}


PostList.contextType = GulzhanContext;

export default PostList