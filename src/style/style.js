'use strict';
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import cookies from 'react-cookies';


const style = {

  main: {
    background: 'black',
    margin: 0,
    width: '100%',
  },

  imgStyle: {
    display: 'inline-block',
    float: 'left',
    textAlign: 'center',
    color: 'white',
  },

  logoSize: {
    display: 'inline-block',
    float: 'left',
    height: '75px',
    margin: '15px',
  },

  signOutStyle: {
    display: 'hidden',
    float: 'right',
    color: 'black',
    background: '#D6D6D6',
    border: '2px solid black',
    borderRadius: '5px',
    marginRight: '1vw',
    marginTop: '2vh',
    padding: '1vh 1vw 1vh 1vw',
  },

  center: {
    display: 'inline-block',
    marginRight: '20%',
    color: 'white',
    fontSize: '36px',
  },

  navBarStyle: {
    height: '90px',
    textAlign: 'center',
    margin: 'auto',
    background: 'black',
  },

  navLinkStyle: {
    display: 'inline-block',
    color: 'white',
    background: '#D23833',
    borderRadius: '5px',
    margin: '0 2vw .5vh 2vw',
    padding: '10px',
    width: '10%',
    height: '30px',
    textAlign: 'center',
    textDecoration: 'none',
  },

  active: {
    background: '#9d1a02',
    width: '13%',
    height: '40px',
    fontWeight: 'bold',
    fontSize: '24px',
    textDecoration: 'none',
  },

  buttonStyle: {
    display: 'block',
    margin: 'auto',
  },

  fancyInputStyle: {
    display: 'inline-block',
    margin: 'auto',
    border: '1px solid black',
    borderRadius: '12px',
    background: '#A60000',
    color: 'white',
    fontSize: '18pt',
    height: '10vh',
    width: '17vw',
    boxShadow: '4px 4px #32001D',
    marginLeft: '2vw',
    marginRight: '2vw',
  },

  ulStyle: {
    padding: 0,
    listStyle: 'none',
  },

  h3: {
    fontSize: '36px',
    textDecoration: 'none',
    margin: '0',
    marginTop: '30px',
  },

  noBullets: {
    listStyle: 'none',
    textAlign: 'left',
  },
};

class HeaderBar extends Component {

  onSignOut() {
    cookies.remove('githubtoken');
    cookies.remove('token');
  }

  render() {
    return (
      <Fragment>
        <div style={style.main}>
          <img src='/images/cfLogo.png' alt='Code Fellows' style={style.logoSize} />
          <h1 style={style.imgStyle}>Code Fellows</h1>
          <p style={style.center}>Code Commando</p>
          {cookies.load('token') && <NavLink style={style.signOutStyle} onClick={this.onSignOut} to='/signin'>Sign Out</NavLink>}
        </div>
      </Fragment>
    );
  }
}

class NavBar extends Component {

  render() {


    return (
      <Fragment>
        <HeaderBar />
        <div style={style.navBarStyle}>
          <NavLink style={style.navLinkStyle} activeStyle={style.active} to='/dashboard'>Home</NavLink>
          <NavLink style={style.navLinkStyle} activeStyle={style.active} to='/roster'>Roster</NavLink>
          <NavLink style={style.navLinkStyle} activeStyle={style.active} to='/random'>Random</NavLink>
          <NavLink style={style.navLinkStyle} activeStyle={style.active} to='/quiz'>Quiz</NavLink>
          <NavLink style={style.navLinkStyle} activeStyle={style.active} to='/coderunner'>Repl</NavLink>
        </div>
      </Fragment>
    );
  }
}

export default { style, HeaderBar, NavBar };
