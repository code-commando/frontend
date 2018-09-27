import React, { Component, Fragment } from 'react';

import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';
import QuizData from './QuizData.js';
import style from '../style/style.js';
import cookies from 'react-cookies';
import {login} from '../actions/login-action.js';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const main = {
  display: 'inline-block',
  background: '#D6D6D6',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  textAlign: 'center',
};

const quizStyle = {
  display: 'inline-block',
  borderStyle: 'solid',
  borderWidth: '5px',
  borderColor: 'blue',
  height: '80%',
  width: '80%',
};

const buttonStyle = {
  display: 'block',
  margin: 'auto',
};

class Quiz extends Component {
  state = {
    showQuiz: false,
  }


  componentDidMount() {
    document.title = 'Quiz';
    if(cookies.load('token')) {
      this.props.login();
    }
  }

  renderQuiz = () => {
    this.setState({ showQuiz: true });
  }

  
  render() {
    if(cookies.load('token')) {
      return (
        <Fragment>
          <style.NavBar />
          <div style={style.style.borderStyle}>
            <h1>Quiz</h1>
            <p>display questions</p>
            <p>display answers</p>
            <button onClick={this.renderQuiz}>Generate Quiz</button>
            <ul>
              {this.state.showQuiz && < QuizData />}
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);