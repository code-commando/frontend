import React, { Component, Fragment } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import cookies from 'react-cookies';
import style from '../style/style.js';


const mainStyle = {
  backgroundImage: 'url(/images/SignIn-image.png)',
  backgroundSize: '100%',
  backgroundPosition: 'contains', 
  height: '100vh',
  width: '100vw',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'black',
  
};

const logIn = {
  width: '40vw',
  fontSize: '28px',
  margin: '10px auto',
  minHeight: '8vh',
  background: '#D90000',
  borderRadius: '20px',
  boxShadow: '10px 5px 5px black',
  

};

const githubImgLogo = {
  display: 'block',
  padding: '10px',
  margin: 'auto',
  

};



class SignIn extends Component {


  handleClick = () => {
    let githubURL = 'https://github.com/login/oauth/authorize';

    let options = {
      client_id: 'f749977a8455b627dc56',
      redirect_uri: 'http://api.commando.ccs.net/oauth',
      scope: 'read:user repo',
      state: 'autumn',

      allow_signup: 'false',
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
          <style.HeaderBar/>
          <h1>Please Sign In</h1>
          
          <img style={githubImgLogo} src='/images/GitHub-Mark-64px.png'/>

          <button style={logIn} onClick={this.handleClick}>Login with Github
          </button>

          
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roster: state.rosterReducer,
  quiz: state.quizReducer,
});



export default connect(mapStateToProps)(SignIn);