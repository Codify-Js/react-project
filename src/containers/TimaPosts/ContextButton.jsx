import React from 'react';
import {TimaThemeContext} from './theme-context.js';
import {Button} from 'react-bootstrap'

class ContextButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <Button
        {...props}
        variant="primary"
        style={{backgroundColor: theme.background, color: theme.foreground}}
      />
    );
  }
}

ContextButton.contextType = TimaThemeContext;

export default ContextButton;