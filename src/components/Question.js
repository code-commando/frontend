import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchQuizData } from '../actions/quiz-action.js';

class Question extends Component {
    
    state = {
        showAnswer: false,
    }

    renderAnswers = () => {
        this.setState({
            showAnswer: true
        });
    }

    hideAnswers = () => {
        this.setState({
            showAnswer: false
        });
    }

    componentDidMount() {
        this.props.fetchQuizData();
      }

    render(){
        return (
            <Fragment>
                {this.props.quiz.map((question, i) =>
                <li key={i}>
                    {question.question}<br />

                    {question.answers ? question.answers.map((answer, i) => <li key={i}>Choice: {answer}</li>) 
                    : 
                    <input placeholder="enter answer here"/>} <br />

                    Answers: {this.state.showAnswer && question.correctAnswer} <br />
                    
                    <button onClick={this.renderAnswers}>Show Answers</button>
                </li>)}
                
                    <button onClick={this.hideAnswers}>Hide Answers</button>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    quiz: state.quizReducer,
  });
  
  const mapDispatchToProps = { fetchQuizData };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Question);
  