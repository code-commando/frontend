import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchQuizData } from '../actions/quiz-action.js';

const answerStyle = {
  color: 'blue',
};

class QuizData extends Component {



    state = {
      showAnswer: false,
    }

    renderAnswer = () => {
      this.setState({ showAnswer: true });
    }

    hideAnswers = () => {
      this.setState({ showAnswer: false });
    }
    componentDidMount() {
      this.props.fetchQuizData();
    }

    render() {
      return (
        <Fragment>
          <ul>
            {this.props.quiz.map((question, i) =>
              <li key={i}>
                {question.questions}<br />
                <ol>Choices: {question.possibleAnswers}</ol>
                <br />
                <p style={answerStyle}>Answer: {this.state.showAnswer && question.correctAnswer}</p>
              </li>)}
            <button onClick={this.renderAnswer}>Show answers</button>
            <button onClick={this.hideAnswers}>Hide Answers</button>
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
