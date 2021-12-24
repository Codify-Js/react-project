import React from 'react';
import { GulzhanContext } from '../gulzhan-context'
import { Container, Row, Col } from 'react-bootstrap';

class PhotosList extends React.Component {
  render() {
    const theme = this.context;
    return (
      <div></div>
      // <div style={{backgroundColor: theme.background, color: theme.foreground}} >
      //   {this.props.list?.map((photo) => {photo class})}
      // </div>
    )
  }
}

PhotosList.contextType = GulzhanContext;

export default PhotosList