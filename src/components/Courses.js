import React, { Component, Fragment } from 'react';
import NavBar from './NavBar.js';

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
  height: '30vh',
  width: 'auto',
  marginLeft: '5vw',
  marginRight: '5vw',
};

const titleStyle = {
  display: 'block',
  color: 'black',
  fontSize: '3em',
  textAlign: 'center',
  marginBottom: '8vh',
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

//  The styling is getting a little wordy (and will be a lot longer on subsequent pages)
//  - do we want to put the styling in its own file and import the whole thing here?

//  i couldn't remember how to get divs to render as inline-block so i made them navs for now

//  They will eventually need to include links
export default class Courses extends Component {
  render() {
    return (
      <Fragment>
        <div style={main}>
          {/* <header style={headerStyle}>
            Placeholder for Navbar
          </header> */}
          <NavBar />
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