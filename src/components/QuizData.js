import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchQuizData } from '../actions/quiz-action.js';
import style from '../style/style.js';


const ulStyle = {
  display: 'block',
  height: '85%',
  margin: 'auto',
  padding: '15px',
  width: '75%',

};

const questionStyle = {
  display: 'inline-block',
  background: '#F3F3F3',
  borderRadius: '8px',
  width: '90%',
  fontSize: '22pt',
  color: '#1E1E1E',
  marginTop: '5px',
};

const answerStyle = {
  display: 'inline-block',
  background: '#E5E5E5',
  borderRadius: '8px',
  width: '65%',
  fontSize: '18pt',
  color: '#1E1E1E',
  boxShadow: '2px 2px #2D2D2D',
  paddingLeft: '.5vw',
  paddingRight: '.5vw',
  paddingTop: '.5vh',
  paddingBottom: '.5vh',
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

        <button onClick={this.renderAnswer}  >Show answers</button>
        <button onClick={this.hideAnswers} style={style.style.buttonStyle} >Hide Answers</button>
        <ul style={ulStyle}>
          {this.props.quiz.map((question, i) =>
            <li key={i} style={questionStyle}>
              {question.questions}<br />
              <ol>Choices: {question.possibleAnswers}</ol>
              <br />
              <p style={answerStyle}>{this.state.showAnswer && question.correctAnswer}</p>
            </li>)}
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
