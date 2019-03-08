import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    img: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddSmurf = () => {
    const { name, age, height, img } = this.state;
    this.props.addSmurfs({ name, age, height, img });
    this.setState({ name: '', age: '', height: '', img: ' ' });
  };

  render() {
    return (
      <form>
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.height}
          name="height"
          type="text"
          placeholder="Height"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.img}
          name="img"
          type="text"
          placeholder="Image"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddSmurf()} type="button">
          Add New Smurf
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingSmurf: state.creatingSmurf
  };
};

export default connect(
  mapStateToProps,
  { addSmurfs }
)(SmurfForm);
