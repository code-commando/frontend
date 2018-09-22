import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAllRosterThunk } from '../actions/roster-action.js';
import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';

const main = {
  width: '100%',
  height: '100%',
  background: '#D5D5D5',
};

const liStyle = {
  display: 'block',
};

const inputStyle = {
  display: 'block',
};

const h1Style = {
  marginLeft: '5vw',
};

const h2Style = {
  marginLeft: '3vw',
};

const formStyle = {
  marginLeft: '3vw',
};

class Roster extends Component {

  componentDidMount() {
    this.props.fetchAllRosterThunk();
  }



  render() {
    return (
      <Fragment>
        <div type="main" style={main}>
          <HeaderBar />
          <NavBar />
          <h1 style={h1Style}>Roster</h1>
          <ul>
            {this.props.roster && this.props.roster.results.map(student => {
              return <li style={liStyle} key={student}>{student}</li>;
            })}
          </ul>

          <form style={formStyle}>
            <h2 style={h2Style}>edit student</h2>
            <label>name</label>
            <input style={inputStyle} type="text" />
            <label>name</label>
            <input style={inputStyle} type="text" />

            <input type="button" value="edit" />
            <input type="button" value="delete" />

          </form>
        </div>
      </Fragment>
    );
  }
}


const mapStateToProps = state => ({ roster: state.rosterReducer });

const mapDispatchToProps = { fetchAllRosterThunk };

export default connect(mapStateToProps, mapDispatchToProps)(Roster);