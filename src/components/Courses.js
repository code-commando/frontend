import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar.js';
import style from '../style/style.js';
import { connect } from 'react-redux';
import {postCourse} from '../actions/course-action.js';

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
  paddingLeft: '10vw',
  paddingRight: '10vw',
};


const imageStyle = {
  float: 'right',
};

//  jlm The styling is getting a little wordy (and will be a lot longer on subsequent pages)
//  - do we want to put the styling in its own file and import the whole thing here?


//  jlm Links are to /dashboard, will need to be to /dashboard/:id or something
class Courses extends Component {

  

  submitCourse = e => {
    e.preventDefault();
    this.props.postCourse();
  }


  render() {
    return (
      <Fragment>
        
        <div style={main}>
          <HeaderBar />
          <br></br>
          <h1 style={titleStyle}>Welcome [user]</h1>



          <form>
            <label>Class Code</label>
            <input type="text" placeholder='401n5'/>

            <label>GitHub Repo Link</label>
            <input type="text" placeholder='https://github.com/codefellows/seattle-javascript-401n5'/>

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
}

const mapStateToProps = state => ({
  postCourse: state.postCourse,
});

const mapDispatchToProps = {postCourse};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);