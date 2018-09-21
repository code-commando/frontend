import React, { Fragment, Component } from 'react';
import NavBar from './NavBar.js';
// import Roster from './Roster.js';
import HeaderBar from './HeaderBar.js';

import {randomStudentThunk} from '../actions/random-student-action.js';
import { connect } from 'react-redux';

class Random extends Component {

  componentDidMount() {
    this.props.randomStudentThunk();
  }

  render() {
    return (
      <Fragment>
        <HeaderBar />
        <NavBar />
        <h1>Random Title</h1>
        <p>random pairs and random student</p>
        <button>Random Student</button>
        
        <button>Random Pairs</button>

        {this.props.roster.results}

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  roster: state.rosterReducer,
});

const mapDispatchToProps = {randomStudentThunk};

export default connect(mapStateToProps, mapDispatchToProps)(Random);
