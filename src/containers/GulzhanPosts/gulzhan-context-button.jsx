import React from "react";
import { GulzhanContext} from "./gulzhan-context";

class GulzhanContextButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
GulzhanContextButton.contextType = GulzhanContext;

export default GulzhanContextButton;