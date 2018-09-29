import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchQuizData } from '../actions/quiz-action.js';

const questionStyle = {
    display: 'inline-block',
    background: '#F3F3F3',
    borderRadius: '8px',
    width: '90%',
    fontSize: '22pt',
    color: '#1E1E1E',
    marginTop: '5px',
};

// import Question from './Question.js';

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

const showBtnStyle = {
    display: 'block',
    margin: 'auto',
    marginTop: '10px',
    background: '#D23833',
    color: 'white',
    boxShadow: '3px 5px 8px black',
    borderRadius: '5px',
    fontSize: '16px',
};

const hideBtnStyle = {
    display: 'block',
    margin: 'auto',
    marginTop: '10px',
    background: '#9d1a02',
    color: 'white',
    boxShadow: '3px 5px 8px black',
    borderRadius: '5px',
    fontSize: '16px',
}

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

    render() {
        return (
            <Fragment>
                {this.props.quiz.map((question, i) =>
                    <li key={i} style={questionStyle}>
                        {question.question}<br />

                        {question.answers ? question.answers.map((answer, i) => <li key={i}>Choice: {answer}</li>)
                            :
                            <input placeholder="enter answer here" />} <br />

                        <p style={answerStyle}>{this.state.showAnswer && question.correctAnswer}</p> <br />

                        {/* <button onClick={this.renderAnswers}>Show Answers</button> */}
                    </li>)}
                <button onClick={this.renderAnswers} style={showBtnStyle}>Show Answers</button>
                <button onClick={this.hideAnswers} style={hideBtnStyle}>Hide Answers</button>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    quiz: state.quizReducer,
});

const mapDispatchToProps = { fetchQuizData };

export default connect(mapStateToProps, mapDispatchToProps)(Question);
