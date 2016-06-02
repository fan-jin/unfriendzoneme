import React from 'react';
var helpers = require('../utils/helpers');

class Form extends React.Component {
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = { value: "" };
  }
  update(e) {
    this.setState({ value: e.target.value });
  }
  render () {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <textarea
          name="msg"
          type="text"
          rows="4"
          cols="50"
          placeholder="Tell me your story..."
          value={this.state.value}
          onChange={this.update}
          required
          autofocus/>
        <input type="submit"/>
      </form>
    );
  }
  submit(e) {
    e.preventDefault();
    var msg = this.state.value;
    helpers.sendMsg(msg);
    this.setState({value: ""});
  }
}

export default Form;
