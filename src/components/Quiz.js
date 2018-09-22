import React, { Component, Fragment } from 'react';

import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';
import QuizData from './QuizData.js';

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