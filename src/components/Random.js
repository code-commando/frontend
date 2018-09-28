import React, { Fragment, Component } from 'react';
import style from '../style/style.js';
import { fetchCourseThunk } from '../actions/course-action.js';
import { randomStudentThunk, randomStudent } from '../actions/random-student-action.js';
import { randomPairsThunk } from '../actions/random-pairs-action.js';
import { connect } from 'react-redux';
import cookies from 'react-cookies';
import { login } from '../actions/login-action.js';
import { Redirect } from 'react-router-dom';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairsOpen: false,
      studentsOpen: false,
    };
  }


  async componentDidMount() {
    await this.props.fetchCourseThunk();
    if (cookies.load('token')) {
      this.props.login();
    }
    this.props.randomStudentThunk(this.props.course.classCode);
    this.props.randomPairsThunk(this.props.course.classCode);
  }

  submitRandom = (e) => {
    e.preventDefault();
    this.props.randomStudentThunk(this.props.course.classCode);
    this.setState({ studentsOpen: true });
    this.setState({ pairsOpen: false });
  }

  submitPairs = (e) => {
    e.preventDefault();
    this.props.randomPairsThunk(this.props.course.classCode);
    this.setState({ pairsOpen: true });
    this.setState({ studentsOpen: false });
  }

  render() {

    let pairStyle;
    if (this.state.pairsOpen) {
      pairStyle = {
        visibility: 'visible',
        display: 'inline-block',
        textAlign: 'center',
        color: 'white',
        borderRadius: '5px',
        background: '#D23833',
        width: '35%',
        marginRight: '3vw',
        marginTop: '2vh',
        marginBottom: '1.5vh',
        marginLeft: '2.5vw',
        boxShadow: '5px 8px #888888',
      };
    } else {
      pairStyle = {
        visibility: 'hidden',
        height: 0,
      };
    }
    let studentStyle;
    if (this.state.studentsOpen) {
      studentStyle = {
        visibility: 'visible',
        display: 'inline-block',
        textAlign: 'center',
        color: 'white',
        background: '#D23833',
        borderRadius: '5px',
        marginRight: '3vw',
        marginTop: '2.5vh',
        marginBottom: '2.5vh',
        marginLeft: '2.5vw',
        padding: '10px',
        width: '7vw',
        boxShadow: '5px 8px #888888',
      };
    } else {
      studentStyle = {
        visibility: 'hidden',
        height: 0,
      };
    }

    if (cookies.load('token')) {
      return (
        <Fragment>
          <style.NavBar />
          <div>
            <h1>Quicker Picker</h1>
            <input style={style.style.fancyInputStyle} type='submit' value='Random Student' onClick={this.submitRandom} />

            <input style={style.style.fancyInputStyle} type='submit' value='Random Pairs' onClick={this.submitPairs} />

            <ul style={style.style.ulStyle}>

              <li style={studentStyle}>{this.props.student.results}</li>

              {this.props.pairs.results.map(pair => {
                return <li key={pair} style={pairStyle}>
                  <p>{pair[0]}</p>
                  <p>{pair[1]}</p>
                  <p>{pair[2]}</p>
                </li>;
              })}

            </ul>

          </div>
        </Fragment>
      );
    }
    else {
      return <Redirect to='/signin' />;

    }
  }
}

const mapStateToProps = (state) => ({
  roster: state.rosterReducer,
  course: state.courseReducer,
  student: state.randomStudentReducer,
  pairs: state.randomPairsReducer,
});

const mapDispatchToProps = { randomStudentThunk, randomStudent, randomPairsThunk, fetchCourseThunk, login };


export default connect(mapStateToProps, mapDispatchToProps)(Random);

