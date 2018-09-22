import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAllRosterThunk } from '../actions/roster-action.js';
import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';

class Roster extends Component {

  componentDidMount() {
    this.props.fetchAllRosterThunk();
  }

  addToRoster = (event) => {
    event.preventDefault();
    this.props.postStudent(this.state);
  }

  deleteFromRoster = (event) => {
    event.preventDefault();
    this.props.deleteStudent(this.state.id);
  }

  onChange = event => {
    const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const changedBit = {
        [event.target.name]: val
    };
    this.setState(changedBit);
};

onChangeId = event => {
    const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const changedBit = {
        id: val
    };
    this.setState(changedBit);
};
  render() {
    return (
      <Fragment>
        <HeaderBar />
        <NavBar />
        <h1>Roster</h1>
        <ul>
          {this.props.roster &&this.props.roster.results.map(student => {
            return <li key={student}>{student}</li>;
          })}

        </ul>

        <form onSubmit={this.addToRoster} onChange={this.onChange}>
            <input name='name' placeholder='New Student' value={this.props.value}/><br/>
            <button>Add New Student</button><br/>
          </form>
          <form onSubmit={this.deleteFromRoster} onChange={this.onChangeId}>
            <input name='name' placeholder='Student ID' value={this.props.value}/><br/>
            <button>Delete By ID</button><br/>
        </form>
      </Fragment>
    );
  }
}


const mapStateToProps = state => ({roster: state.rosterReducer});

const mapDispatchToProps = {fetchAllRosterThunk};

export default connect(mapStateToProps, mapDispatchToProps)(Roster);