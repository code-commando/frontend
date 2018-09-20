import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import HeaderBar from './HeaderBar';
//  i just put this in to help position other elements, navbar should contain its own styling


export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBar />
        <NavBar />
        <h1>Dashboard</h1>
        <p>{'I\'m afraid I can\'t let you do that, Dave.'}</p>
      </Fragment>
    );
  }
}