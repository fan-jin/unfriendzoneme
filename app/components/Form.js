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
        <div className="form-group text-center">
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
        </div>
        <div className="form-group text-center">
          <button className="btn btn-default" type="submit">Submit</button>
        </div>
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
