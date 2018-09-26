import React, { Component, Fragment } from 'react';

import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';
import QuizData from './QuizData.js';

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

  renderQuiz = () => {
    this.setState({ showQuiz: true });
  }

  render() {
    return (
      <Fragment>
        <div style={main}>
          <HeaderBar />
          <NavBar />
          <h1>Quiz</h1>
          <button style={buttonStyle} onClick={this.renderQuiz}>Generate Quiz</button>
          <ul style={quizStyle}>
            {this.state.showQuiz && < QuizData />}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Quiz;