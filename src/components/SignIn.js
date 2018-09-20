import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';


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
      return `${key}=` +  encodeURIComponent(options[key]);
    }).join('&');

    let authURL = `${githubURL}?${QueryString}`;
  
    window.location = authURL;
  }

  render() {
    return (
      <Fragment>
        <header className='sign-in-navbar'>
          <h1>Title</h1>
        </header>
        <div>
          <button onClick={this.handleClick} >Login with Github</button>
          <h1>Sign-in Title</h1>
          <p>Sign-in box here</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roster: state.rosterReducer,
});


export default connect(mapStateToProps, null)(SignIn);