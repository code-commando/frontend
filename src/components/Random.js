import React, { Fragment, Component } from 'react';
import NavBar from './NavBar.js';
// import Roster from './Roster.js';
import HeaderBar from './HeaderBar.js';

import {randomStudentThunk} from '../actions/random-student-action.js';
import {randomPairsThunk} from '../actions/random-pairs-action.js';
import { connect } from 'react-redux';

class Random extends Component {

  componentDidMount() {
    this.props.randomStudentThunk();
    this.props.randomPairsThunk();
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

        {this.props.student.results}

        {this.props.pairs.results.map(pair => {
          return <li key={pair}>
            <p>{pair[0]}</p> 
            <p>{pair[1]}</p> 
            <p>{pair[2]}</p>
          </li>;
        })}

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  roster: state.rosterReducer,
  student: state.randomStudentReducer,
  pairs: state.randomPairsReducer,
});

const mapDispatchToProps = {randomStudentThunk, randomPairsThunk};

export default connect(mapStateToProps, mapDispatchToProps)(Random);
