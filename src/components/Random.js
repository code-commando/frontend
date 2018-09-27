import React, { Fragment, Component } from 'react';
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

  submitRandom = (e) => {
    e.preventDefault();

    this.props.randomStudentThunk();
  }

  submitPairs = (e) => {
    e.preventDefault();
    this.props.randomPairsThunk();
  }

  render() {
    return (
      <Fragment>
        <style.NavBar />
        <div>
          <h1>Random Title</h1>
          <input type='submit'  value='Random Student' onClick={this.submitRandom}/>
        
          <input type='submit' value='Random Pairs' onClick={this.submitPairs}/>

          <ul>

            <li>{this.props.student.results}</li>

            {/* <li>{this.props.pairs.results}</li> */}

          


            {this.props.pairs.results.map(pair => {
              return <li key={pair}>
                <p>{pair[0]}</p> 
                <p>{pair[1]}</p> 
                <p>{pair[2]}</p>
              </li>;
            })}

          </ul>

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

