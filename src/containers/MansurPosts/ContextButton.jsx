import React from 'react';
import {MansurThemeContext} from './theme-context.js';
import {Button} from 'react-bootstrap'

class ContextButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <div></div>
      // <Button
      //   {...props}
      //   variant="primary"
      //   style={{backgroundColor: theme.background, color: theme.foreground}}
      // />
    );
  }
}

ContextButton.contextType = MansurThemeContext;

export default ContextButton;