import React, { Fragment, Component } from 'react';
import style from '../style/style.js';

import { fetchCourseThunk } from '../actions/course-action.js';
import {randomStudentThunk, randomStudent} from '../actions/random-student-action.js';
import {randomPairsThunk} from '../actions/random-pairs-action.js';
import { connect } from 'react-redux';
import cookies from 'react-cookies';
import {login} from '../actions/login-action.js';
import {Redirect} from 'react-router-dom';

const pairLiStyle = {
  display: 'inline-block',
  textAlign: 'center',
  color: 'blue',
  border: '5px solid red',
  width: '27%',
  marginLeft: '1%',
  marginRight: '1%',
  marginTop: '2%',
  marginBottom: '2%',
};

const studentLiStyle = {
  display: 'inline-block',
  textAlign: 'center',
  width: '65%',
  border: '5px solid green',
};

const h1Style = {
  textAlign: 'center',
};

const buttonBoxStyle = {
  display: 'block',
  margin: 'auto',
  textAlign: 'center',
};

class Random extends Component {
  constructor(props) {
    super(props);
    this.handleStudent = this.handleStudent.bind(this);
    this.handlePairs = this.handlePairs.bind(this);
    this.state = {
      pairsOpen: false,
      studentsOpen: false,
    };
  }

  handleStudent() {
    this.setState({ studentsOpen: true });
    this.setState({ pairsOpen: false });
  }
  handlePairs() {
    this.setState({ pairsOpen: true });
    this.setState({ studentsOpen: false });
  }

  async componentDidMount() {
    await this.props.fetchCourseThunk();
    if(cookies.load('token')) {
      this.props.login();
    }
    this.props.randomStudentThunk(this.props.course.classCode);
    this.props.randomPairsThunk(this.props.course.classCode);
  }

  submitRandom = (e) => {
    e.preventDefault();
    this.props.randomStudentThunk(this.props.course.classCode);

    this.handleStudent();
  }

  submitPairs = (e) => {
    e.preventDefault();
    this.props.randomPairsThunk(this.props.course.classCode);
  }

  render() {

    if(cookies.load('token')) {
      return (
        <Fragment>
          <style.NavBar />
          <div style={style.style.borderStyle}>
            <h1>Random Title</h1>
            <input type='submit'  value='Random Student' onClick={this.submitRandom}/>
        
            <input type='submit' value='Random Pairs' onClick={this.submitPairs}/>

            <ul>

              <li>{this.props.student.results}</li>

              {this.props.pairs.results.map(pair => {
                return <li key={pair}>
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
      return <Redirect to='/signin'/>;

    }
    this.props.randomPairsThunk();
    this.handlePairs();
  }

  render() {
    let pairStyle;
    if (this.state.pairsOpen) {
      pairStyle = {
        visibility: 'visible',
        display: 'inline-block',
        border: '5px solid orange',
        height: '76%',
        width: '85%',
      };
    } else {
      pairStyle = {
        visibility: 'hidden',
      };
    }
    let studentsStyle;
    if (this.state.studentsOpen) {
      studentsStyle = {
        visibility: 'visible',
        border: '5px solid blue',
        height: '15%',
        margin: 'auto',
        paddingLeft: '40%',
        paddingRight: '40%',
        paddingTop: '6%',
      };
    } else {
      studentsStyle = {
        visibility: 'hidden',
        height: 0,
      };
    }

        if(cookies.load('token')) {
      return (
        <Fragment>
          <style.NavBar />
          <div style={style.style.borderStyle}>
            <h1>Random Title</h1>
            <input type='submit'  value='Random Student' onClick={this.submitRandom}/>
        
            <input type='submit' value='Random Pairs' onClick={this.submitPairs}/>

            <ul>

              <li>{this.props.student.results}</li>

              {this.props.pairs.results.map(pair => {
                return <li key={pair}>
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
      return <Redirect to='/signin'/>;

    }
  }
}

const mapStateToProps = (state) => ({
  roster: state.rosterReducer,
  course: state.courseReducer,
  student: state.randomStudentReducer,
  pairs: state.randomPairsReducer,
});

const mapDispatchToProps = {randomStudentThunk, randomStudent, randomPairsThunk, fetchCourseThunk, login};



export default connect(mapStateToProps, mapDispatchToProps)(Random);

