import React, { Component, Fragment } from 'react';
import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';
import Roster from './Roster.js';

const main = {
  display: 'inline-block',
  background: '#D6D6D6',
  textAlign: 'center',
  minHeight: '100vh',
  width: '100%',
};

const outerContainer = {
  height: '75%',
  minHeight: '100vh',
};

const innerContainer = {
  display: 'inline-block',
  borderStyle: 'solid',
  borderWidth: '9px',
  borderColor: '#90000A',
  height: '70vh',
  width: '75%',
  float: 'right',
  paddingBottom: '5vh',
};

const title = {
  color: '#181818',
  textAlign: 'left',
  marginLeft: '5%',
};

const bottomLeft = {
  display: 'inline-block',
  borderStyle: 'solid',
  borderWidth: '5px',
  borderColor: '#90000A',
  height: '25vh',
  width: '30%',
  float: 'left',
  marginLeft: '10%',
  marginTop: '5vh',
  paddingTop: '5vh',
  boxShadow: '3px 5px #252526',
};

const bottomRight = {
  display: 'inline-block',
  height: '25vh',
  width: '30%',
  float: 'right',
  marginRight: '10%',
  marginTop: '5vh',
};

const h1Style = {
  height: '4vh',
};

const enBiggen = {
  fontSize: '22pt',
};

const openButtonStyle = {
  display: 'inline-block',
  marginTop: '25vh',
  float: 'left',
  height: '20vh',
  width: '7%',
  borderStyle: 'solid',
  borderWidth: '3px',
  borderColor: 'black',
  color: 'black',
  borderRadius: '15%',
  boxShadow: '5px 10px #5C534C',
};

const closeButtonStyle = {
  height: '50px',
  width: '50px',
  borderStyle: 'solid',
  borderWidth: '5px',
  borderColor: 'red',
};

const listStyle = {
  height: '50px',
  width: '50px',
  borderStyle: 'solid',
  borderWidth: '5px',
  borderColor: 'blue',
};

const sidebarBox = {
  height: '100vh',
  float: 'left',
  borderStyle: 'solid',
  borderWidth: '5px',
  borderColor: 'purple',
};

function OpenSidebar(props) {
  return (
    <button style={openButtonStyle} onClick={props.onClick}>Roster</button>
  );
}

function CloseSidebar(props) {
  return (
    <button style={closeButtonStyle} onClick={props.onClick}>close sidebar</button>
  );
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);

    this.state = { open: false };
  }

  handleOpenSidebar() {
    this.setState({ open: true });
  }
  handleCloseSidebar() {
    this.setState({ open: false });
  }
  render() {
    let sidebar;
    if (this.state.open) {
      sidebar = (
        <Fragment>
          <div style={sidebarBox}>
            <CloseSidebar onClick={this.handleCloseSidebar} />
            <Roster />
          </div>
        </Fragment>
      );
    } else {
      sidebar = <OpenSidebar onClick={this.handleOpenSidebar} />;
    }

    return (
      <Fragment>
        <div type="main" style={main}>
          <HeaderBar />
          <h1 style={h1Style}>301n##</h1>
          <NavBar />
          <div className="outerContainer" style={outerContainer}>
            <div>{sidebar}</div>
            <div className="innerContainer" style={innerContainer}>
              <h1 style={title}>Day ##</h1>
              <div type="bottom left" style={bottomLeft} >
                <ul>
                  <li>Learn the blah blah blahs</li>
                  <li>Take a Quiz</li>
                  <li>Pick on a student</li>
                  <li>Work in pairs</li>
                  <li>Demo code the blahs</li>
                </ul>
              </div>
              <div type="bottom right" style={bottomRight} >
                <ul>
                  <li style={enBiggen}>Lecture of the Day:</li>
                  <li>^Link to above^</li>
                  <li style={enBiggen}>Code Assignment</li>
                  <li>^Link to above^</li>
                  <li style={enBiggen}>Canvas</li>
                  <li>^Link to above^</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
