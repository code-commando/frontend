import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchQuizData } from '../actions/quiz-action.js';
import Question from './Question.js';

const ulStyle = {
  display: 'block',
  height: '85%',
  margin: 'auto',
  padding: '15px',
  width: '75%',
  listStyle: 'none',
};


class QuizData extends Component {

  state = {
    showAnswer: false,
  }

  renderAnswers = () => {
    this.setState({ showAnswer: true });
  }

  hideAnswers = () => {
    this.setState({ showAnswer: false });
  }

  render() {
    return (
      <Fragment>
        <ul style={ulStyle}>
          <Question />
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.quizReducer,
});

const mapDispatchToProps = { fetchQuizData };

export default connect(mapStateToProps, mapDispatchToProps)(QuizData);
