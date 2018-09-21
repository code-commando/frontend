import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import HeaderBar from './HeaderBar';

export default class CodeRunner extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBar />
        <NavBar />
        <h1>Code runner</h1>
      </Fragment>
    );
  }
}
