import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class BooleanEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { booleanEditor: "" };
  }
  getValue = () => {
    // return { number: this.state.numberEditor };
    let obj = {};
    obj[this.props.column.key] = this.state.booleanEditor;
    return obj;
  };

  getInputNode = () => {
    return ReactDOM.findDOMNode(this);
  };

  handleChange = ({ target: { value } }) => {
    console.log(value);
    if (value === "t") this.setState({ booleanEditor: "true" });
    if (value === "f") this.setState({ booleanEditor: "false" });
    // if (isNaN(Number(value))) return;
    // this.setState({ booleanEditor: value });
  };

  render() {
    console.log(this.props);
    return (
      <input
        name="booleanEditor"
        type="bool"
        placeholder="Enter t for true and f for false"
        value={this.state.booleanEditor}
        onChange={this.handleChange}
      />
    );
  }
}
