import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`

 */

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

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

export default connect(mapStateToProps)(App);
