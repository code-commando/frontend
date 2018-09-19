import React, { Component, Fragment } from 'react';

const coursesStyle = {
  background: 'red',
  color: 'blue',
};

export default class Courses extends Component {
  render() {
    return (
      <Fragment>
        <header style={coursesStyle}>
          <h1>Username Classes</h1>
        </header>
        <h1 style={coursesStyle}>Courses</h1>
      </Fragment>
    );
  }
}