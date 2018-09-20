import React, { Fragment, Component } from 'react';
import NavBar from './NavBar.js';
import Roster from './Roster.js';

export default class Random extends Component {
  render() {
    return (
      <Fragment>
        <Roster />
        <h1>random button</h1>
        <h1></h1>
        
        <ul>
        </ul>
      </Fragment>
    );
  }
}
