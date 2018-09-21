import React, { Fragment, Component } from 'react';
import NavBar from './NavBar.js';
// import Roster from './Roster.js';
import HeaderBar from './HeaderBar.js';

import {randomStudentThunk} from '../actions/roster-action.js';
import { connect } from 'tls';

class Random extends Component {
  render() {
    return (
      <Fragment>
        <HeaderBar />
        <NavBar />
        <h1>Random Title</h1>
        <p>random pairs and random student</p>
        <button>Random Student</button>
        
        <button>Random Pairs</button>

        
        {/* <Roster/> */}
      </Fragment>
    );
  }
}
export default Random;

// const mapStateToProps = (state) => ({
//   roster: state.rosterReducer,
// });

// const mapDispatchToProps = {randomStudentThunk};

// export default connect(mapStateToProps, mapDispatchToProps)(Random);