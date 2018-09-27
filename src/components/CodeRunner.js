import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import HeaderBar from './HeaderBar';

const main = {
  background: '#D6D6D6',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  textAlign: 'center',
};

export default class CodeRunner extends Component {
  render() {
    return (
      <Fragment>
        <div style={main}>
          <HeaderBar />
          <NavBar />
          <h1>Code runner</h1>
        </div>
      </Fragment>
    );
  }
}
