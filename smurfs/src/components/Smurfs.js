import React, { Component } from 'react';
import { connect } from 'react-redux';

import { delSmurf } from '../actions';

class Smurfs extends Component {
  handleDeleteSmurf = id => {
    this.props.delSmurf(id);
  };

  render() {
    return (
      <div style={container}>
        <div className="smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <div
                style={card}
                onClick={() => this.handleDeleteSmurf(smurf.id)}
                key={smurf.id}
              >
                <h2> {smurf.name}</h2>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
                <img style={pic} src={smurf.img} alt="" />
              </div>
            );
          })}
        </div>
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
  { delSmurf }
)(Smurfs);
