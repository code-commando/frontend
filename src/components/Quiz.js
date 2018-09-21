import React, { Component, Fragment } from 'react';
import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';

export default class Quiz extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBar />
        <NavBar />
        <h1>Quiz</h1>
        <p>display questions</p>
        <p>display answers</p>  
      </Fragment>
    );
  }
}
