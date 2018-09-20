import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAllRosterThunk } from '../actions/roster-action.js';


class Roster extends Component {

  componentDidMount() {
    this.props.fetchAllRosterThunk();
  }



  render() {
    return (
      <Fragment>
        <h1>Roster</h1>
        <ul>
          {this.props.roster && this.props.roster.results}
        </ul>

        <form>
            <input name='name' placeholder='New Student' value={this.props.value}/><br/>
            <button>Add New Student</button><br/>
            </form>
            <form onSubmit={this.deleteFromList} onChange={this.onChangeId}>
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