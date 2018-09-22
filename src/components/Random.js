import React, { Fragment, Component } from 'react';
import NavBar from './NavBar.js';
// import Roster from './Roster.js';
import HeaderBar from './HeaderBar.js';
import style from '../style/style.js';


import {randomStudentThunk, randomStudent} from '../actions/random-student-action.js';
import {randomPairsThunk} from '../actions/random-pairs-action.js';
import { connect } from 'react-redux';


const main = {
  background: '#D6D6D6',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  textAlign: 'center',
};

class Random extends Component {

  componentDidMount() {
    this.props.randomStudentThunk();
    this.props.randomPairsThunk();
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.student.results[0];
  //   console.log('ASKJDSLJ', this.props.student.results[0]);
  // }

  render() {
    return (
      <Fragment>
        <style.NavBar/>
        <div style={style.style.borderStyle}>
          {/* <HeaderBar />
          <NavBar /> */}
          <h1>Random Title</h1>
          <input type='submit'  value='Random Student' onClick={this.handleSubmit}/>
        
          <input type='submit' value='Random Pairs'/>

          {this.props.student.results}

          {this.props.pairs.results.map(pair => {
            return <li key={pair}>
              <p>{pair[0]}</p> 
              <p>{pair[1]}</p> 
              <p>{pair[2]}</p>
            </li>;
          })}

        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  roster: state.rosterReducer,
  student: state.randomStudentReducer,
  pairs: state.randomPairsReducer,
});

const mapDispatchToProps = {randomStudentThunk, randomStudent, randomPairsThunk};


export default connect(mapStateToProps, mapDispatchToProps)(Random);

