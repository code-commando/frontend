import React, { Component, Fragment } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import cookies from 'react-cookies';

import HeaderBar from './HeaderBar.js';

const mainStyle = {
  background: '#D6D6D6',
  height: '100%',
  width: '100%',
  textAlign: 'center',
};

const logIn = {
  width: '40vw',
  fontSize: '28px',
  margin: '30px auto',
  minHeight: '8vh',
  background: '#D90000',
  borderRadius: '20px',
  boxShadow: '10px 5px 5px black',
};

const githubImgStyle = {
  display: 'block',
  padding: '25px',
  margin: '25px',
  color: 'purple',
};

const imgStyle = {
  display: 'block',
  height: '700px',
  padding: '25px',
  bottomMargin: '75px',
  color: 'purple',
};
class SignIn extends Component {


  handleClick = () => {
    let githubURL = 'https://github.com/login/oauth/authorize';

    let options = {
      // local
      client_id: 'd6c0defbd80f3979493a',
      //live
      // client_id: 'f749977a8455b627dc56',
      redirect_uri: 'http://localhost:3000/oauth',
      // redirect_uri: 'https://code-commando.herokuapp.com/oauth',
      scope: 'read:user repo',
      state: 'autumn',
      allow_signup: 'true',
    };

    let QueryString = Object.keys(options).map((key) => {
      return `${key}=` + encodeURIComponent(options[key]);
    }).join('&');

    let authURL = `${githubURL}?${QueryString}`;

    window.location = authURL;
  }



  render() {

    if(cookies.load('githubtoken')) {
      return <Redirect to='/dashboard'/>;
    }

    return (
      <Fragment>
        <div style={mainStyle}>
          <HeaderBar />
          <h1>Please Sign In</h1>
          <p style={githubImgStyle}>github icon photo</p>
          <img src='/images/GitHub-Mark-64px.png'/>

          <button style={logIn} onClick={this.handleClick}>Login with Github
          </button>
          <img src='/images/freeImage.png' style= {imgStyle}/>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roster: state.rosterReducer,
  quiz: state.quizReducer,
});


export default connect(mapStateToProps, null)(SignIn);