import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import HeaderBar from './HeaderBar';

const main = {
  background: '#D6D6D6',
  textAlign: 'center',
  height: '100%',
  width: '100%',
};

const content = {
  display: 'inline-block',
  borderStyle: 'solid',
  borderWidth: '5px',
  borderColor: '#90000A',
  width: '80%',
  height: '75%',
  paddingBottom: '5vh',
  marginTop: '4vh',
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
};

const bottomRight = {
  display: 'inline-block',
  height: '25vh',
  width: '30%',
  float: 'right',
  marginRight: '10%',
  marginTop: '5vh',
};

const buttonStyle = {
  display: 'inline-block',
  borderRadius: '10%',
  width: '15%',
  height: '5vh',
  marginTop: '5vh',
  marginRight: '80%',
};

const enBiggen = {
  fontSize: '22pt',
};
export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div type="main" style={main}>
          <HeaderBar />
          <h1>301n##</h1>
          <NavBar />
          <div type="content" style={content}>
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
            <button style={buttonStyle}>edit</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
