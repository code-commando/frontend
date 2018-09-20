import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import {fetchQuizData} from '../actions/quiz-action.js';

import NavBar from './NavBar.js';


class Quiz extends Component {

  componentDidMount() {
    this.props.fetchQuizData();
  }

  render() {
    return (
      <Fragment>
        <header><NavBar /></header>
        <h1>Quiz</h1>
        <p>display questions</p>
        <p>display answers</p>
        <button onClick={}>Generate Quiz</button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  quiz: state.quizReducer,
})

const mapDispatchToProps = {fetchQuizData}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);