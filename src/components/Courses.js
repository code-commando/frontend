import React, { Component, Fragment } from 'react';

const coursesStyle = {
  background: "red",
  color: "blue"
};

export default class Courses extends Component {
  render() {
    return (
      <Fragment style={coursesStyle}>
        <header>
          <h1>Username Classes</h1>
        </header>
        <h1>Courses</h1>
      </Fragment>
    );
  }
}