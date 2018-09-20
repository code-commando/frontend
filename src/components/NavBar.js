import React, { Component, Fragment } from 'react';
import {NavLink} from 'react-router-dom';


const navBarStyle = {
  display: 'inline-block',
  background: '#D23833',
  color: 'black',
  height: '100%',
  width: '100%',
  textAlign: 'center',
  margin: 0,
};

const linkStyle = {
  display: 'inline-block',
  color: 'black',
  background: '#D6D6D6',
  borderStyle: 'solid',
  borderColor: 'black',
  borderWidth: '2px',
  borderRadius: '15%',
  marginRight: '6vw',
  marginTop: '2vh',
  marginBottom: '1vh',
  paddingLeft: '1vw',
  paddingRight: '1vw',
  paddingTop: '1vh',
  paddingBottom: '1vh',
};
//  wasn't sure where the sign out was supposed to link to, so for now it just points back to the sign in page

export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <ul style={navBarStyle} className='navbar'>
          <NavLink style={linkStyle} to='/courses'>My Classes</NavLink>
          <NavLink style={linkStyle} to='/quiz'>Quiz</NavLink>
          <NavLink style={linkStyle} to='/slides'>Slides</NavLink>
          <NavLink style={linkStyle} to='/roster'>Roster</NavLink>
          <NavLink style={linkStyle} to='/random'>Random Pairs</NavLink>
          <NavLink style={linkStyle} to='/coderunner'>Repl</NavLink>
        </ul>
      </Fragment>
    );
  }
} 
