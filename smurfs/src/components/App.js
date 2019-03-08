import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, delSmurf } from '../actions';
import './App.css';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  removeSmurf = id => {
    this.props.delSmurf(id);
  };
  render() {
    return (
      <div className="App">
        <SmurfForm />
        {/* {this.props.smurfs.map(smurf => (
          <ul key={smurf.height}>
            <li>Name : {smurf.name}</li>
            <li>Age : {smurf.age}</li>
            <li>Height: {smurf.height}</li>
            <button onClick={() => this.removeSmurf(smurf.id)}>x</button>
          </ul>
        ))} */}
        <Smurfs />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { fetchSmurfs, delSmurf }
)(App);
