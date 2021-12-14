import React from 'react';
import {MansurThemeContext} from './theme-context.js';

class ContextButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <button
        {...props}
        style={{backgroundColor: theme.background, color: theme.foreground}}
      />
    );
  }
}

ContextButton.contextType = MansurThemeContext;

export default ContextButton;