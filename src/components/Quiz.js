import React, { Component, Fragment } from 'react';
import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';


const main = {
  background: '#D6D6D6',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  textAlign: 'center',
};

export default class Quiz extends Component {
  render() {
    return (
      <Fragment>
        <div style={main}>
          <HeaderBar />
          <NavBar />
          <h1>Quiz</h1>
          <p>display questions</p>
          <p>display answers</p>
        </div>
      </Fragment>
    );
  }
}
