import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAllRosterThunk } from '../actions/roster-action.js';
import { fetchCourseThunk } from '../actions/course-action.js';
import cookies from 'react-cookies';
import { login } from '../actions/login-action.js';
import { Redirect } from 'react-router-dom';
import style from '../style/style.js';

const formStyle = {
  width: '20%',
  height: '20%',
  margin: 'auto',
  marginTop: '30px',
};

const inputStyle = {
  display: 'relative',
  width: '100%',
  margin: 'auto',
};

const buttonStyle = {
  display: 'block',
  margin: 'auto',
  marginTop: '10px',
  background: '#D23833',
  color: 'white',
  boxShadow: '3px 5px 8px black',
  borderRadius: '5px',
  fontSize: '16px',
};

const studentStyle = {
  display: 'inline-block',
  margin: '3%',
  width: '15%',
  height: '10%',
  color: 'white',
  background: '#D23833',
  padding: '10px',
  listStyle: 'none',
  textAlign: 'center',
  boxShadow: '5px 8px #888888',
  borderRadius: '5px',
};

class Roster extends Component {

  async componentDidMount() {
    document.title = 'Roster';
    await this.props.fetchCourseThunk();
    if (cookies.load('token')) {
      this.props.login();
    }
    this.props.fetchAllRosterThunk(this.props.course.classCode);
  }

  addToRoster = (event) => {
    event.preventDefault();
  }

  deleteFromRoster = (event) => {
    event.preventDefault();
  }

  onChange = event => {
    const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const changedBit = {
      [event.target.name]: val,
    };
    this.setState(changedBit);
  };

  onChangeId = event => {
    const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const changedBit = {
      id: val,
    };
    this.setState(changedBit);
  };

  render() {

    if (cookies.load('token')) {

      return (
        <Fragment>
          <style.NavBar />

          <div className="RosterMain">

            <div type="main" >

              <h1>Roster</h1>
              <ul>
                {this.props.roster && this.props.roster.results.map(student => {
                  return <li key={student} style={studentStyle}>{student}</li>;
                })}
              </ul>

              <form onSubmit={this.addToRoster} onChange={this.onChange} style={formStyle}>
                <input name='name' style={inputStyle} placeholder='New Student' value={this.props.value} /><br />
                <button style={buttonStyle}>Add New Student</button><br />
              </form>
              <form onSubmit={this.deleteFromRoster} onChange={this.onChangeId} style={formStyle}>
                <input name='name' style={inputStyle} placeholder='Student ID' value={this.props.value} /><br />
                <button style={buttonStyle}>Delete By ID</button><br />
              </form>

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
  roster: state.rosterReducer,
  course: state.courseReducer,
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = { fetchAllRosterThunk, login, fetchCourseThunk };

export default connect(mapStateToProps, mapDispatchToProps)(Roster);
