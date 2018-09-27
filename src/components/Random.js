import React, { Fragment, Component } from 'react';
import style from '../style/style.js';


import { randomStudentThunk, randomStudent } from '../actions/random-student-action.js';
import { randomPairsThunk } from '../actions/random-pairs-action.js';
import { connect } from 'react-redux';

const pairLiStyle = {
  display: 'inline-block',
  textAlign: 'center',
  color: 'white',
  borderRadius: '5px',
  background: '#D23833',
  width: '35%',
  marginRight: '3vw',
  marginTop: '2vh',
  marginBottom: '1.5vh',
  marginLeft: '2.5vw',
  boxShadow: '5px 8px #888888',
};

const studentLiStyle = {
  display: 'inline-block',
  textAlign: 'center',
  color: 'white',
  background: '#D23833',
  borderRadius: '5px',
  marginRight: '3vw',
  marginTop: '2.5vh',
  marginBottom: '2.5vh',
  marginLeft: '2.5vw',
  padding: '10px',
  width: '7vw',
  boxShadow: '5px 8px #888888',
};

class Random extends Component {
  constructor(props) {
    super(props);
    this.handleStudent = this.handleStudent.bind(this);
    this.handlePairs = this.handlePairs.bind(this);
    this.state = {
      pairsOpen: false,
      studentsOpen: false,
    };
  }

  handleStudent() {
    this.setState({ studentsOpen: true });
    this.setState({ pairsOpen: false });
  }
  handlePairs() {
    this.setState({ pairsOpen: true });
    this.setState({ studentsOpen: false });
  }

  componentDidMount() {
    this.props.randomStudentThunk();
    this.props.randomPairsThunk();
  }

  submitRandom = (e) => {
    e.preventDefault();
    this.props.randomStudentThunk();
    this.handleStudent();
  }

  submitPairs = (e) => {
    e.preventDefault();
    this.props.randomPairsThunk();
    this.handlePairs();
  }

  render() {
    let pairStyle;
    if (this.state.pairsOpen) {
      pairStyle = {
        visibility: 'visible',
        display: 'inline-block',
        height: '76%',
        width: '85%',
      };
    } else {
      pairStyle = {
        visibility: 'hidden',
      };
    }
    let studentsStyle;
    if (this.state.studentsOpen) {
      studentsStyle = {
        visibility: 'visible',
        height: '15%',
        margin: 'auto',
        paddingLeft: '40%',
        paddingRight: '40%',
        paddingTop: '6%',
      };
    } else {
      studentsStyle = {
        visibility: 'hidden',
        height: 0,
      };
    }
    return (
      <Fragment>
        <style.NavBar />
        <div>
          <h1>Quicker Picker</h1>
          <input type='submit' value='Random Student' onClick={this.submitRandom} />
          <input type='submit' value='Random Pairs' onClick={this.submitPairs} />
        </div>
        <ul style={studentsStyle}>

          <li style={studentLiStyle}>{this.props.student.results}</li>

        </ul>
        <ul style={pairStyle}>
          {this.props.pairs.results.map(pair => {
            return <li key={pair} style={pairLiStyle}>
              <p>{pair[0]}</p>
              <p>{pair[1]}</p>
              <p>{pair[2]}</p>
            </li>;
          })}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  roster: state.rosterReducer,
  student: state.randomStudentReducer,
  pairs: state.randomPairsReducer,
});

const mapDispatchToProps = { randomStudentThunk, randomStudent, randomPairsThunk };


export default connect(mapStateToProps, mapDispatchToProps)(Random);

