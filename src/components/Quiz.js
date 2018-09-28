import React, { Component, Fragment } from 'react';


import QuizData from './QuizData.js';
import style from '../style/style.js';
import cookies from 'react-cookies';
import { login } from '../actions/login-action.js';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const fancyButtonStyle = {
  display: 'inline-block',
  width: '20vw',
  height: '5vh',
  border: 'none',
  borderRadius: '12px',
  boxShadow: '3px 3px #2B0000',
  background: '#A60000',
  color: '#D5D5D5',
  paddingTop: '2vh',
  paddingBottom: '10vh',
  fontSize: '18pt',
};



class Quiz extends Component {
  state = {
    showQuiz: false,
  }


  componentDidMount() {
    document.title = 'Quiz';
    if (cookies.load('token')) {
      this.props.login();
    }
  }

  renderQuiz = () => {
    this.setState({ showQuiz: true });
  }


  render() {
    if (cookies.load('token')) {
      return (
        <Fragment>
          <style.NavBar />
          <h1>Quiz</h1>
          <button style={fancyButtonStyle} onClick={this.renderQuiz} > Generate Quiz </button>
          <ul style={style.style.ulStyle}>
            {this.state.showQuiz && < QuizData />}
          </ul>
        </Fragment>
      );
    }
    else {
      return <Redirect to='/signin' />;

    }

  }
}


const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);