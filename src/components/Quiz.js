import React, { Component, Fragment } from 'react';

import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';
import QuizData from './QuizData.js';

const main = {
  background: '#D6D6D6',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  textAlign: 'center',
};

class Quiz extends Component {
  state = {
    showQuiz: false,
  }

  renderQuiz = () => {
    this.setState({ showQuiz: true});
  }

  render() {
    return (
      <Fragment>
        <HeaderBar />
        <NavBar />
        <h1>Quiz</h1>
        <p>display questions</p>
        <p>display answers</p>
        <button onClick={this.renderQuiz}>Generate Quiz</button>
        <ul>
          {this.state.showQuiz && < QuizData/>}
        </ul>
      </Fragment>
    );
  }
}

export default Quiz;