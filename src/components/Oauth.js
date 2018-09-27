import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import cookie from 'react-cookies';
import queryString from 'query-string';

export default class Oauth extends Component {

  componentDidMount() {
    const { githubtoken, token } = queryString.parse(this.props.location.search);
    console.log(githubtoken, token);
    cookie.save('token', token);
    cookie.save('githubtoken', githubtoken);
  }
  render() {
    return (
      <Redirect to='/dashboard' />
    );
  }
}