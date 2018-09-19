import React, { Component, Fragment } from 'react';
import {NavLink} from 'react-router-dom';

const navBarStyle = {
  display: 'inline-block',
  backgroundColor: '#D23833',
  color: 'black',
  height: '10vh',
  width: '100%',
  textAlign: 'center',
  margin: 0,
};

//  wasn't sure where the sign out was supposed to link to, so for now it just points back to the sign in page

export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <ul style={navBarStyle} className='navbar'>The Coolest NavBar You Ever Saw
          <NavLink to='/courses'>My Classes</NavLink>
          <NavLink to='/quiz'>Quiz</NavLink>
          <NavLink to='/dashboard'>Slides</NavLink>
          <NavLink to='/coderunner'>Repl</NavLink>
          <NavLink to='/signin'>Sign Out</NavLink>
        </ul>
      </Fragment>
    );
  }
} 
