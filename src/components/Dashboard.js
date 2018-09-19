import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';

//  i just put this in to help position other elements, navbar should contain its own styling


export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <h1>Dashboard</h1>
      </Fragment>
    );
  }
}