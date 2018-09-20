import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../actions/roster-action';
// import { fetchAllRosterThunk } from '../actions/roster-action.js';
import NavBar from './NavBar.js';

class Roster extends Component {
  componentDidMount() {
    this.props.fetchAll();
    console.log('fetching', this.props.roster);
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <h1>Roster</h1>
        <ul>{this.props.roster && this.props.roster.results}</ul>

        <form>
          <label>edit student</label>
          <label>name</label>
          <input type="text" />
          <label>name</label>
          <input type="text" />
          <label>name</label>
          <input type="text" />

          <input type="button" value="edit" />
          <input type="button" value="delete" />
        </form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(fetchAll),
});

const mapStateToProps = state => ({
  roster: state.rosterReducer,
});

// const mapDispatchToProps = { fetchAllRosterThunk };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Roster);
