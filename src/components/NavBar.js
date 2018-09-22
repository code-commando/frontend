import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const navBarStyle = {
  display: 'inline-block',
  background: '#D23833',
  color: 'black',
  height: '90px',
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
  marginRight: '5vw',
  marginTop: '2vh',
  marginBottom: '1vh',
  paddingLeft: '1vw',
  paddingRight: '1vw',
  paddingTop: '1vh',
  paddingBottom: '1vh',
};
//  jlm wasn't sure where the sign out was supposed to link to, so for now it just points back to the sign in page

// jlm I commented out the My Classes link for now since I think the only thing that hits it is the sign in page

// jlm the roster is its own page for now, once the component is functional we are going to try to style it as the pop-out sidebar per the comps
export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <div style={navBarStyle}>
          <ul className='navbar'>
            <NavLink style={linkStyle} to='/dashboard'>Slides</NavLink>
            <NavLink style={linkStyle} to='/random'>Random Pairs</NavLink>
            <NavLink style={linkStyle} to='/quiz'>Quiz</NavLink>
            <NavLink style={linkStyle} to='/coderunner'>Repl</NavLink>
            <NavLink style={linkStyle} to='/roster'>Roster</NavLink>
          </ul>
        </div>
      </Fragment>
    );
  }
} 
