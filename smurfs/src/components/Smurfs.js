import React, { Component } from 'react';
import { connect } from 'react-redux';

import { delSmurf, updateSmurfs } from '../actions';

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurf: {
        name: '',
        age: '',
        height: '',
        img: '',
        id: ''
      }
    };
  }

  handleDeleteSmurf = id => {
    this.props.delSmurf(id);
  };
  editSmurf = e => {
    e.preventDefault();
    const { newSmurf } = this.state;
    this.props.updateSmurfs(newSmurf.id, newSmurf);
  };
  updateSmurf = smurf => {
    this.setState({
      newSmurf: smurf
    });
  };
  handleUpdateSmurf = e => {
    e.persist();
    this.setState(prevState => {
      return {
        newSmurf: {
          ...prevState.newSmurf,
          [e.target.name]: e.target.value
        }
      };
    });
  };
  render() {
    return (
      <div style={container}>
        <div className="smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <div style={card} key={smurf.id}>
                <button onClick={() => this.handleDeleteSmurf(smurf.id)}>
                  x
                </button>
                <h2> {smurf.name}</h2>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
                <img style={pic} src={smurf.img} alt="" />
                <button onClick={() => this.updateSmurf(smurf)}>update</button>
              </div>
            );
          })}
        </div>
        <form>
          <input
            type="text"
            onChange={this.handleUpdateSmurf}
            name="age"
            value={this.state.newSmurf.age}
          />
          <input
            type="text"
            onChange={this.handleUpdateSmurf}
            name="name"
            value={this.state.newSmurf.name}
          />
          <input
            type="text"
            onChange={this.handleUpdateSmurf}
            name="height"
            value={this.state.newSmurf.height}
          />
          <input
            type="text"
            onChange={this.handleUpdateSmurf}
            name="img"
            value={this.state.newSmurf.img}
          />
          <button onClick={this.editSmurf}>sumbit</button>
        </form>
      </div>
    );
  }
}

const container = {
  color: 'white'
};

const pic = {
  width: '300px',
  height: '300px'
};

const card = {
  width: '40%',
  background: 'lightBlue',
  margin: '20px auto'
};

const mapStateToProps = state => {
  return {
    error: state.error,
    showUpdate: state.showUpdate,
    smurfSelected: state.smurfSelected,
    deletingSmurf: state.deletingSmurf,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { delSmurf, updateSmurfs }
)(Smurfs);
