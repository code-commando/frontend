import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';

export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
      <header><NavBar /></header>
      <h1>Dashboard</h1>
      </Fragment>
    );
  }
}