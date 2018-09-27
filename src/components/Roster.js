import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAllRosterThunk } from '../actions/roster-action.js';

const inputStyle = {
  display: 'relative',
  width: '100%',
  margin: 'auto',
};

const buttonStyle = {
  display: 'block',
  margin: 'auto',
};

const titleStyle = {
  color: '#B29973',
};
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
    return (
      <Fragment>
        <div className="RosterMain">

          <form onSubmit={this.addToRoster} onChange={this.onChange}>
            <input name='name' style={inputStyle} placeholder='New Student' value={this.props.value} /><br />
            <button style={buttonStyle}>Add New Student</button><br />
          </form>
          <form onSubmit={this.deleteFromRoster} onChange={this.onChangeId}>
            <input name='name' style={inputStyle} placeholder='Student ID' value={this.props.value} /><br />
            <button style={buttonStyle}>Delete By ID</button><br />
          </form>

          <div type="main" >
            
            <h1 style={titleStyle}>Roster</h1>
            <ul>
              {this.props.roster && this.props.roster.results.map(student => {
                return <li key={student}>{student}</li>;
              })}
            </ul>

            <form style={inputStyle}>
              <h2 style={titleStyle}>Edit Student</h2>
              <label>name</label>
              <input style={inputStyle} type="text" />
              <label>name</label>
              <input style={inputStyle} type="text" />
              <label>name</label>
              <input style={inputStyle} type="text" />

              <input type="button" value="edit" />
              <input type="button" value="delete" />

            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}


const mapStateToProps = state => ({ roster: state.rosterReducer });

const mapDispatchToProps = { fetchAllRosterThunk };

export default connect(mapStateToProps, mapDispatchToProps)(Roster);