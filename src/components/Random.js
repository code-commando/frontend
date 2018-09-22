import React, { Fragment, Component } from 'react';
// import NavBar from './NavBar.js';
// import HeaderBar from './HeaderBar.js';
import style from '../style/style.js';

export default class Random extends Component {
  render() {
    return (
      <Fragment>
        {/* <HeaderBar /> */}
        <style.NavBar />
        {/* <NavBar /> */}
        <h1>Random Title</h1>
        <p>random pairs and random student</p>
        <p> Roster Component here</p>
      </Fragment>
    );
  }
}
