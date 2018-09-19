import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';

export default class CodeRunner extends Component {
  render() {
    return (
      <Fragment>
      <header><NavBar /></header>
      <h1>Code runner</h1>
      </Fragment>
    );
  }
}