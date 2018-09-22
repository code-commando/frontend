'use strict';
import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  test: {
    width: '100%',
    heigth: '20%',
    backgroundColor: 'black',
    color: 'white',
    margin: 'auto',
    fontSize: '48px',
  },

  main: {
    background: 'black',
    margin: 0,
    width: '100%',
  },
  
  imgStyle: {
    display: 'inline-block',
    float: 'left',
    color: 'white',
  },
  
  linkStyle: {
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
  },
  
  center: {
    display: 'inline-block',
    marginLeft: '25%',
    color: 'white',
    fontSize: '36px',
  },

  navBarStyle: {
    display: 'inline-block',
    background: '#D23833',
    color: 'black',
    height: '90px',
    width: '100%',
    textAlign: 'center',
    margin: 0,
  },

  navLinkStyle: {
    display: 'inline-block',
    color: 'black',
    background: '#D6D6D6',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '2px',
    borderRadius: '15%',
    marginRight: '5vw',
    marginTop: '2vh',
    marginBottom: '1vh',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    paddingTop: '1vh',
    paddingBottom: '1vh',
  },
};

class HeaderBar extends Component {
  render() {
    return (
      <Fragment>
        <div style={style.main}>
          <p style={style.imgStyle}>placeholder for image</p>
          <p style={style.center}>Code Commando</p>
          <NavLink style={style.linkStyle} to='/signin'>Sign Out</NavLink>
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
          <ul className='navbar'>
            <NavLink style={style.navLinkStyle} to='/dashboard'>Slides</NavLink>
            <NavLink style={style.navLinkStyle} to='/random'>Random Pairs</NavLink>
            <NavLink style={style.navLinkStyle} to='/quiz'>Quiz</NavLink>
            <NavLink style={style.navLinkStyle} to='/coderunner'>Repl</NavLink>
            <NavLink style={style.navLinkStyle} to='/roster'>Roster</NavLink>
          </ul>
        </div>
      </Fragment>
    );
  }
} 

export default {style, HeaderBar, NavBar};
