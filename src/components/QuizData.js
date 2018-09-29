import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchQuizData } from '../actions/quiz-action.js';
// import style from '../style/style.js';
import Question from './Question.js';

const ulStyle = {
  display: 'block',
  height: '85%',
  margin: 'auto',
  padding: '15px',
  width: '75%',
  listStyle: 'none',
};

// const questionStyle = {
//   display: 'inline-block',
//   background: '#F3F3F3',
//   borderRadius: '8px',
//   width: '90%',
//   fontSize: '22pt',
//   color: '#1E1E1E',
//   marginTop: '5px',
// };

// import Question from './Question.js';

// const answerStyle = {
//   display: 'inline-block',
//   background: '#E5E5E5',
//   borderRadius: '8px',
//   width: '65%',
//   fontSize: '18pt',
//   color: '#1E1E1E',
//   boxShadow: '2px 2px #2D2D2D',
//   paddingLeft: '.5vw',
//   paddingRight: '.5vw',
//   paddingTop: '.5vh',
//   paddingBottom: '.5vh',
// };

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
        <ul style={ulStyle}>
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
