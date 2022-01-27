import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class StringEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { stringEditor: "" };
  }
  getValue = () => {
    // return { number: this.state.numberEditor };
    let obj = {};
    obj[this.props.column.key] = this.state.stringEditor;
    return obj;
  };

  getInputNode = () => {
    return ReactDOM.findDOMNode(this);
  };

  handleChange = ({ target: { value } }) => {
    console.log(value);
    // if (isNaN(Number(value))) return;
    this.setState({ stringEditor: value });
  };

  render() {
    console.log(this.props);
    return (
      <input
        name="stringEditor"
        type="text"
        placeholder="Enter string"
        value={this.state.stringEditor}
        onChange={this.handleChange}
      />
    );
  }
}
