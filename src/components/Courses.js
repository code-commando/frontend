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
  
  textAlign: 'center',
  background: '#D6D6D6',
  height: '100vh',
  width: '100%',
};
const coursesStyle = {
  display: 'inline-block',
  background: '#D23833',
  color: 'white',
  height: '35vh',
  width: 'auto',
  marginLeft: '5vw',
  marginRight: '5vw',
};

const titleStyle = {
  display: 'block',
  color: 'black',
  fontSize: '3em',
  textAlign: 'center',
  marginBottom: '10vh',
};

const textStyle = {
  textAlign: 'center',
  fontSize: '3em',
  paddingTop: '4vh',
  paddingLeft: '10vw',
  paddingRight: '10vw',
};

const imageStyle = {
  textAlign: 'right',
};

//  i couldn't remember how to get divs to render as inline-block so i made them navs for now
export default class Courses extends Component {
  render() {
    return (
      <Fragment>
        <div style={main}>
          <header style={headerStyle}>
            Placeholder for Navbar
          </header>

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