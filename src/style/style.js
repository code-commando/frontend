'use strict';
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const style = {

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

  logoSize: {
    display: 'inline-block',
    float: 'left',
    height: '75px',
    margin: '15px',
  },

  linkStyle: {
    display: 'inline-block',
    float: 'right',
    color: 'black',
    background: '#D6D6D6',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '2px',
    borderRadius: '5px',
    marginRight: '1vw',
    marginTop: '2vh',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    paddingTop: '1vh',
    paddingBottom: '1vh',
  },

  center: {
    display: 'inline-block',
    marginLeft: '20%',
    color: 'white',
    fontSize: '36px',
  },

  navBarStyle: {
    display: 'inline-block',
    height: '90px',
    width: '100%',
    textAlign: 'center',
    margin: 0,
  },

  navLinkStyle: {
    display: 'inline-block',
    color: 'white',
    background: '#D23833',
    // borderStyle: 'solid',
    // borderColor: 'black',
    // borderWidth: '2px',
    borderRadius: '5px',
    marginRight: '5vw',
    marginTop: '2vh',
    marginBottom: '.5vh',
    padding: '10px',
    width: '10%',
    height: '30px',
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

  borderStyle: {
    margin: 'auto',
    marginBottom: '2%',
    padding: '25px',
    width: '90%',
    height: '500px',
    background: '#D6D6D6',
    borderColor: '#9d1a02',
    borderStyle: 'solid',
    borderWidth: '5px',
    borderRadius: '10px',
  },
};

class HeaderBar extends Component {
  render() {
    return (
      <Fragment>
        <div style={style.main}>
          <img src='/images/code-fellows.png' alt='Code Fellows' style={style.logoSize} />
          <h1 style={style.imgStyle}>Code Fellows</h1>
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
            <NavLink style={style.navLinkStyle} activeStyle={style.active} to='/random'>Random</NavLink>
            <NavLink style={style.navLinkStyle} to='/quiz'>Quiz</NavLink>
            <NavLink style={style.navLinkStyle} activeStyle={style.active} to='/coderunner'>Repl</NavLink>
          </ul>
        </div>
      </Fragment>
    );
  }
}

// class Preference extends Component {
//   constructor(props) {
//     super(props);

//     this.basic = {
//       background: '#D6D6D6',
//       borderColor: '#9d1a02',
//       navColor: '#D23833',
//       textColor: 'black',
//     };

//     this.dark = {
//       background: '#22222a',
//       borderColor: '#0f1743',
//       navColor: '#242947',
//       textColor: 'white',
//     };

//     this.state = { ...this.basic };
//   }

//   basicTheme = () => {
//     this.setState({ ...this.basic });
//   }

//   darkTheme = () => {
//     this.setState({ ...this.dark });
//   }

//   render() {
//     return (
//       <Fragment>
//         <div>
//           <button onClick={this.state.basicTheme}>Basic</button>
//           <button onClick={this.state.darkTheme}>Dark</button>
//         </div>
//       </Fragment>
//     );
//   }
// }

export default { style, HeaderBar, NavBar };
