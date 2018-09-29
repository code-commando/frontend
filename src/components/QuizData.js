import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchQuizData } from '../actions/quiz-action.js';

import Question from './Question.js';

const answerStyle = {
  color: 'blue',
};

class QuizData extends Component {



    state = {
      showAnswer: false,
    }

    renderAnswers = () => {
      console.log('!!!')
      this.setState({ showAnswer: true });
    }

    hideAnswers = () => {
      this.setState({ showAnswer: false });
    }
    
    render() {
        return (
          <Fragment>
            <ul>
              <Question />
            </ul>
          </Fragment>
        )
    }
}

const mapStateToProps = state => ({
  quiz: state.quizReducer,
});

const mapDispatchToProps = { fetchQuizData };

export default connect(mapStateToProps, mapDispatchToProps)(QuizData);
