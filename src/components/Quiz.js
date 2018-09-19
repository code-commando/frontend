import React, { Component, Fragment } from 'react';
import NavBar from './NavBar.js';
export default class Quiz extends Component {
  render() {
    return (
      <Fragment>
        <header><NavBar /></header>
        <h1>Quiz</h1>
        <h1>Quiz</h1>
        <p>display questions</p>
        <p>display answers</p>  
      </Fragment>

    );
  }
}
