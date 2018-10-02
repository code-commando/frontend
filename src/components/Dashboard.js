import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCourseThunk } from '../actions/course-action.js';
import cookies from 'react-cookies';
import { login } from '../actions/login-action.js';
import { Redirect } from 'react-router-dom';
import style from '../style/style.js';

const innerContainer = {
  display: 'inline-block',
  height: '70vh',
  width: '90%',
  paddingBottom: '5vh',
  background: '#D6D6D6',
  borderRadius: '5px',
};

const title = {
  color: '#181818',
  textAlign: 'center',
  marginLeft: '5%',
};

const bottomLeft = {
  display: 'inline-block',
  marginRight: '100px',
  fontSize: '1.5vw',
  height: '50vh',
  width: '45%',
  paddingTop: '2vh 0 2vh 0',
};

const bottomRight = {
  display: 'inline-block',
  height: '25vh',
  width: '30%',
  float: 'right',
  marginRight: '5vw',
  marginTop: '5vh',
  textAlign: 'left',

};

const textArea = {
  width: '90%',
  height: '300px',
};

const clearButton = {
  float: 'right',
  marginRight: '10%',
  width: '20%',
  height: '20%',
  background: 'black',
  color: 'white',
  fontSize: '16px',
};

const classLinks = {
  textDecoration: 'none',
  fontSize: '24px',
  color: '#9d1a02',
};

const canvas = {
  fontSize: '36px',
  textDecoration: 'none',
  color: '#D23833',
};

const zero = {
  marginLeft: '0',
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);

    this.state = { open: false };
  }

  componentDidMount() {
    document.title = 'Dashboard';
    this.props.fetchCourseThunk();
    if (cookies.load('token')) {
      this.props.login();
    }
  }

  handleOpenSidebar() {
    this.setState({ open: true });
  }
  handleCloseSidebar() {
    this.setState({ open: false });
  }
  render() {

    if (cookies.load('token')) {
      return (
        <Fragment>
          <style.NavBar />
          <div>
            <h1 style={zero} >{this.props.course.classCode}</h1>
            <div className='innerContainer' style={innerContainer}>
              <h1 style={title}>Day {this.props.course.dayNumber}</h1>
              <div type='bottom left' style={bottomLeft} >
                <form>
                  Notes
                  <textarea style={textArea} name='notes' placeholder='Topics for the Day' />
                  <br />
                  <button style={clearButton}>Clear</button>
                </form>
              </div>
              <div type="bottom right" style={bottomRight} >
                <h3 style={style.style.h3}>Lecture of the Day</h3>
                <a style={classLinks} href={this.props.course.lectureLink}>{this.props.course.lectureTitle}</a>
                <h3 style={style.style.h3}>Lab Assignment</h3>
                <a style={classLinks} href={this.props.course.labLink}>{this.props.course.labTitle}</a>
                <h3 style={style.style.h3}><a style={canvas} href='https://canvas.instructure.com/login/canvas'>Go to Canvas</a></h3>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
    else {
      return <Redirect to='/signin' />;

    }
  }
}


const mapStateToProps = state => ({
  course: state.courseReducer,
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = { fetchCourseThunk, login };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);