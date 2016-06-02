import React from 'react';

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
      <form>
        <textarea type="text"
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
}

export default Form;
