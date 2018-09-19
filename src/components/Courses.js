import React, { Component, Fragment } from 'react';

//  i just put this in to help position other elements, navbar should contain its own styling
const headerStyle = {
  borderWidth: '10px',
  borderColor: 'black',
  backgroundColor: '#D23833',
  color: 'black',
  height: '10vh',
  width: '100%',
  textAlign: 'center',
};

const main = {
  padding: '5em',
  textAlign: 'center',
  background: '#D6D6D6',
  height: '65vh',
};
const coursesStyle = {
  display: 'inline-block',
  background: '#D23833',
  color: 'white',
  height: '35vh',
  width: 'auto',
  marginLeft: '15vh',
  marginRight: '15vh',
};

const titleStyle = {
  color: 'black',
  fontSize: '3em',
  textAlign: 'center',
  marginBottom: '10vh',
};

const textStyle = {
  textAlign: 'center',
  fontSize: '3em',
  paddingTop: '4vh',
  paddingLeft: '10vh',
  paddingRight: '10vh',
};

const imageStyle = {
  textAlign: 'right',
};

//  i couldn't remember how to get divs to render as inline-block so i made them navs for now
export default class Courses extends Component {
  render() {
    return (
      <Fragment>
        <header style={headerStyle}>
          Placeholder for Navbar
        </header>
        <div style={main}>
          <h1 style={titleStyle}>Welcome [user]</h1>
          <nav style={coursesStyle}>
            <p style={imageStyle}>placeholder for image</p>
            <p style={textStyle}>301d##</p>
          </nav>
          <nav style={coursesStyle}>
            <p style={imageStyle}>placeholder for image</p>
            <p style={textStyle}>401n##</p>
          </nav>
        </div>
      </Fragment>
    );
  }
}