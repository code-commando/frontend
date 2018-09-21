import React, { Fragment, Component } from 'react';
import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';

export default class Random extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBar />
        <NavBar />
        <h1>Random Title</h1>
        <p>random pairs and random student</p>
        <p> Roster Component here</p>
      </Fragment>
    );
  }
}
