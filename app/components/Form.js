import React from 'react';
var helpers = require('../utils/helpers');

class Form extends React.Component {
  constructor(){
    super();
    this.updateMessage = this.updateMessage.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.state = { value: "", email: "", status: "" };
  }
  updateMessage(e) {
    this.setState({ value: e.target.value });
  }
  updateEmail(e) {
    this.setState({ email: e.target.value });
  }
  render () {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <div className="form-group text-center">
          <input
            type="email"
            onChange={this.updateEmail}
            placeholder="email@example.com"
            value={this.state.email}
            required
            ></input>
        </div>
        <div className="form-group text-center">
          <textarea
            name="msg"
            type="text"
            rows="4"
            cols="50"
            placeholder="your story..."
            value={this.state.value}
            onChange={this.updateMessage}
            required
            autofocus/>
        </div>
        <div className="form-group text-center">
          <button className="" type="submit">help me</button>
          <p>{this.state.status}</p>
        </div>
      </form>
    );
  }
  submit(e) {
    e.preventDefault();
    var msg = this.state.value;
    var email = this.state.email;
    helpers.sendMsg(msg, email);
    this.setState({value: "", email: "", status: "(sent)"});
  }
}

export default Form;
