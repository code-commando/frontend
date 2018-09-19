import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {signinThunk} from '../actions/signin-action.js';


class SignIn extends Component {

  componentDidMount() {
    this.props.signinThunk();
  }

  render() {
    return (
      <Fragment>
        <header className='sign-in-navbar'>
          <h1>Title</h1>
        </header>
        <div>
          {/* {this.props.signin} */}
          <h1>Sign-in Title</h1>
          <p>Sign-in box here</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roster: state.rosterReducer,
  signin: state.signinReducer,
});

const mapDispatchToProps = {signinThunk};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);