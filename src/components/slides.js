import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import cookies from 'react-cookies';
import {login} from '../actions/login-action.js';
import {Redirect} from 'react-router-dom';

class Slides extends Component {


  componentDidMount() {
    document.title = 'Slides';
    if(cookies.load('token')) {
      this.props.login();
    }
  }

  render() {

    if(cookies.load('token')) {
      return (

        <Fragment>
          <p>slides</p>
      
        </Fragment>
      );
    }
    else {
      return <Redirect to='/signin'/>;

    }
  }
}

const mapStateToProps = state => ({
  course: state.courseReducer,
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Slides);