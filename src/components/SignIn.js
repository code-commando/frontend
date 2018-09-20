import React, { Component, Fragment } from 'react';

const dayClasses = {
  width: "200px",
  margin: "30px auto",
  backgroundColor: "yellow",
  minHeight: "200px",
  boxSizing: "border-box"
}

const eveClasses = {
  width: "200px",
  margin: "30px auto",
  backgroundColor: "grey",
  minHeight: "200px",
  boxSizing: "border-box"
}
export default class SignIn extends Component {
  render() {
    return (
      <Fragment>
        <header className='sign-in-navbar'>
          <h1>Title</h1>
        </header>
        <div>
          <h1>Sign-in Title</h1>
          <p style={dayClasses}>Sign-in box here</p>
          <p style={eveClasses}></p>
        </div>
      </Fragment>
    );
  }
}
