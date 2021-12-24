import React from 'react';
import { TimaThemeContext } from './theme-context.js';
import ContextButton from './ContextButton';
import { Container, Row, Col } from 'react-bootstrap';

class PostsList extends React.Component {
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

PostsList.contextType = TimaThemeContext;

export default PostsList