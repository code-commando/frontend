import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import cookies from 'react-cookies';


const main = {
  background: 'black',
  margin: 0,
  width: '100%',
};

const imgStyle = {
  display: 'inline-block',
  float: 'left',
  color: 'white',
};

const linkStyle = {
  display: 'inline-block',
  float: 'right',
  color: 'black',
  background: '#D6D6D6',
  borderStyle: 'solid',
  borderColor: 'black',
  borderWidth: '2px',
  borderRadius: '15%',
  marginRight: '1vw',
  marginTop: '2vh',
  paddingLeft: '1vw',
  paddingRight: '1vw',
  paddingTop: '1vh',
  paddingBottom: '1vh',
};

const center = {
  display: 'inline-block',
  color: 'white',
};

export default class HeaderBar extends Component {

  onSignOut() {
    cookies.remove('githubtoken', { path: '/'});
    cookies.remove('token', { path: '/' });
  }

  render() {
    return (
      <Fragment>
        <div style={main}>
          <p style={imgStyle}>placeholder for image</p>
          <p style={center}>Code Commando</p>
          <NavLink style={linkStyle} onClick={this.onSignOut} to='/signin'>Sign Out</NavLink>
        </div>
      </Fragment>
    );
  }
}