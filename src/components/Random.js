import React, { Fragment, Component } from 'react';
import style from '../style/style.js';

import { fetchCourseThunk } from '../actions/course-action.js';
import {randomStudentThunk, randomStudent} from '../actions/random-student-action.js';
import {randomPairsThunk} from '../actions/random-pairs-action.js';
import { connect } from 'react-redux';
import cookies from 'react-cookies';
import {login} from '../actions/login-action.js';
import {Redirect} from 'react-router-dom';


const main = {
  background: '#D6D6D6',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  textAlign: 'center',
};

class Random extends Component {

  async componentDidMount() {
    await this.props.fetchCourseThunk();
    this.props.randomStudentThunk(this.props.course.classCode);
    this.props.randomPairsThunk(this.props.course.classCode);
  }

  submitRandom = (e) => {
    e.preventDefault();

    this.props.randomStudentThunk(this.props.course.classCode);
  }

  submitPairs = (e) => {
    e.preventDefault();
    this.props.randomPairsThunk(this.props.course.classCode);
  }

  render() {
    return (
      <Fragment>
        <style.NavBar />
        <div style={style.style.borderStyle}>
          <h1>Random Title</h1>
          <input type='submit'  value='Random Student' onClick={this.submitRandom}/>
        
          <input type='submit' value='Random Pairs' onClick={this.submitPairs}/>

          <ul>

            <li>{this.props.student.results}</li>

            {/* <li>{this.props.pairs.results}</li> */}

            <ul>{this.props.pairs.results.map(pairs => {
              return <li key={pairs}>{pairs}</li>;
            })}</ul>


            {/* {this.props.pairs.results.map(pair => {
              return <li key={pair}>
                <p>{pair[0]}</p> 
                <p>{pair[1]}</p> 
                <p>{pair[2]}</p>
              </li>;
            })} */}

          </ul>

        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  roster: state.rosterReducer,
  course: state.courseReducer,
  student: state.randomStudentReducer,
  pairs: state.randomPairsReducer,
});

const mapDispatchToProps = {randomStudentThunk, randomStudent, randomPairsThunk, fetchCourseThunk};


export default connect(mapStateToProps, mapDispatchToProps)(Random);

