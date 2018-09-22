import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import {fetchQuizData} from '../actions/quiz-action.js';

import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';

class Quiz extends Component {

  componentDidMount() {
    this.props.fetchQuizData();
  }



  render() {
    return (
      <Fragment>
        <HeaderBar />
        <NavBar />
        <h1>Quiz</h1>
        <p>display questions</p>
        <p>display answers</p>
        <button>Generate Quiz</button>
        <ul>
          {this.props.quiz.map((question, i) => <li key={i}>{question.questions}</li>)}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.quizReducer,
})

const mapDispatchToProps = {fetchQuizData}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);