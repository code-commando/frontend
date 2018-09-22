import React from 'react';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import HeaderBar from './HeaderBar.js';

const mainStyle = {
  background: '#D6D6D6',
  height: '100vh',
  width: '100%',
  textAlign: 'center'
};

const signIn = {
  fontSize: '24px',
  fontFamily: 'ariel',
  padding: '22px',

};

const logIn = {
  width: '40vw',
  fontSize: '28px',
  margin: '30px auto',
  minHeight: '8vh',
  background: '#D90000',
  borderRadius: '20px',
  boxShadow: '10px 5px 5px black',

}

class SignIn extends Component {

  // componentDidMount() {
  //   this.props.signinThunk();
  // }

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
    return (
      <Fragment>
        <div style={mainStyle}>
          <HeaderBar/>
          <h1 style={signIn}>Please Sign In</h1>
          
          <button style={logIn} onClick={this.handleClick}>Login with Github
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roster: state.rosterReducer,
});


export default connect(mapStateToProps, null)(SignIn);