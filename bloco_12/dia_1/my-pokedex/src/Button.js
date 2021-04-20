import React from "react";

class Button extends React.Component {
  render() {
    return <button onClick={this.props.onClick} name={this.props.type} >{this.props.type}</button>;
  }
}

export default Button