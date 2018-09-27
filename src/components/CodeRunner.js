import React, { Component, Fragment } from 'react';
import style from '../style/style.js';
import cookies from 'react-cookies';
import {login} from '../actions/login-action.js';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const main = {
  background: '#D6D6D6',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  textAlign: 'center',
};

class CodeRunner extends Component {


  componentDidMount() {
    document.title = 'Code Runner';
    if(cookies.load('token')) {
      this.props.login();
    }
  }


  render() {

    if(this.props.loggedIn) {
      return (
        <Fragment>
          <style.NavBar />
          <div style={style.style.borderStyle}>
            <h1>Code runner</h1>
          </div>
        </Fragment>
      );
    }
    else {
      return <Redirect to='/signin'/>;

    }
  }
}


const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(CodeRunner);
