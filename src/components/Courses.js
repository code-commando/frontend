import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar.js';
import style from '../style/style.js';
import { connect } from 'react-redux';
import {postCourse} from '../actions/course-action.js';
import cookies from 'react-cookies';
import {login} from '../actions/login-action.js';
import {Redirect} from 'react-router-dom';

const main = {
  textAlign: 'center',
  background: '#D6D6D6',
  height: '100vh',
  width: '100%',
};
const coursesStyle = {
  display: 'inline-block',
  background: '#D23833',
  color: 'white',
  height: '30vh',
  width: 'auto',
  marginLeft: '5vw',
  marginRight: '5vw',
};

const titleStyle = {
  display: 'block',
  marginBottom: '8vh',
  marginTop: '0',
  color: 'black',
  fontSize: '3em',
  textAlign: 'center',
};

const textStyle = {
  textAlign: 'center',
  fontSize: '3em',
  paddingTop: '4vh',
  paddingLeft: '1vw',
  paddingRight: '10vw',
};


const imageStyle = {
  float: 'right',
};

//  jlm The styling is getting a little wordy (and will be a lot longer on subsequent pages)
//  - do we want to put the styling in its own file and import the whole thing here?


//  jlm Links are to /dashboard, will need to be to /dashboard/:id or something
class Courses extends Component {

  state = {
    classCode: '',
    gitHubRepo: '',
  }

  compontentDidMount() {
    document.title = 'Courses';
    if(cookies.load('token')) {
      this.props.login();
    }
  }

  submitCourse = (e) => {
    e.preventDefault();
    this.props.postCourse(this.state.classCode, this.state.gitHubRepo);
    console.log('kdjlf', this.state);
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});

  }


  render() {

    if(cookies.load('token')) {

      return (
        <Fragment>
        
          <div style={main}>
            <HeaderBar />
            <br></br>
            <h1 style={titleStyle}>Welcome [user]</h1>



            <form onSubmit={this.submitCourse}>
              <label>Class Code</label>
              <input type="text" placeholder='401n5' name='classCode' value={this.state.classCode} onChange={this.handleChange}/>

              <label>GitHub Repo Link</label>
              <input type="text" placeholder='https://github.com/codefellows/seattle-javascript-401n5' name='gitHubRepo' value={this.state.gitHubRepo} onChange={this.handleChange}/>

              <input type="submit"/>
            </form>


            <Link to='/dashboard'>
              <div style={coursesStyle}>
                <p style={imageStyle}>placeholder for image</p>
                <p style={textStyle}>301d##</p>
              </div>
            </Link>
            <Link to='/dashboard'>
              <div style={coursesStyle}>
                <p style={imageStyle}>placeholder for image</p>
                <p style={textStyle}>401n##</p>
              </div>
            </Link>
          </div>



        </Fragment>
      );
    }
    else {
      return <Redirect to='/signin'/>;
    }
  }
}

const mapStateToProps = state => ({
  postClass: state.postCourseInfo,
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = {postCourse, login};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);