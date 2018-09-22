// import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
// import {fetchQuizData} from '../actions/quiz-action.js';
// class QuizData extends Component {

// state = {
//     showAnswer: false,
// }

// renderAnswer = () => {
//     this.setState({ showAnswer: true})
// }

// hideAnswers = () => {
//     this.setState({ showAnswer: false})
// }
// componentDidMount() {
//     this.props.fetchQuizData();
//   }

//   render(){
//       return(
//         <ul>
//             {this.props.quiz.map((question, i) => 
//             <li key={i}>
//                 <ol>Answer: 
//                     {/* <li>{question.correctAnswer}<br/></li> */}
//                 </ol>
//             </li>)}
//         </ul>
//       )}
// }



// const mapStateToProps = state => ({
//     quiz: state.quizReducer,
//   })
  
//   const mapDispatchToProps = {fetchQuizData}
  
//   export default connect(mapStateToProps, mapDispatchToProps)(QuizData);