import React, { Component, Fragment } from 'react';

import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';
import QuizData from './QuizData.js';
import style from '../style/style.js';

// const main = {
//   display: 'inline-block',
//   background: '#D6D6D6',
//   minHeight: '100vh',
//   height: '100%',
//   width: '100%',
//   textAlign: 'center',
// };

const listStyle = {
  display: 'inline-block',
  border: '5px solid green',
  height: '100%',
  width: '80%',
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
        <style.NavBar />
        <div>
          <h1>Quiz</h1>
          <button onClick={this.renderQuiz}>Generate Quiz</button>
          <ul style={listStyle}>
            {this.state.showQuiz && < QuizData />}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Quiz;