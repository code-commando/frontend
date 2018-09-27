import React, { Fragment, Component } from 'react';
import style from '../style/style.js';


import { randomStudentThunk, randomStudent } from '../actions/random-student-action.js';
import { randomPairsThunk } from '../actions/random-pairs-action.js';
import { connect } from 'react-redux';

const pairLiStyle = {
  display: 'inline-block',
  textAlign: 'center',
  color: 'blue',
  border: '5px solid red',
  width: '27%',
  marginLeft: '1%',
  marginRight: '1%',
  marginTop: '2%',
  marginBottom: '2%',
};

const studentLiStyle = {
  display: 'inline-block',
  textAlign: 'center',
  width: '65%',
  border: '5px solid green',
};

const h1Style = {
  textAlign: 'center',
};

const buttonBoxStyle = {
  display: 'block',
  margin: 'auto',
  textAlign: 'center',
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
        border: '5px solid orange',
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
        border: '5px solid blue',
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
        <div style={style.style.borderStyle}>
          <h1 style={h1Style}>Quicker Picker</h1>
          <div className='buttonBox' style={buttonBoxStyle}>
            <input type='submit' value='Random Student' onClick={this.submitRandom} />

            <input type='submit' value='Random Pairs' onClick={this.submitPairs} />
          </div>
          <ul style={studentsStyle}>

            <li style={studentLiStyle}>{this.props.student.results}</li>

            {/* <li>{this.props.pairs.results}</li> */}

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

const mapDispatchToProps = { randomStudentThunk, randomStudent, randomPairsThunk };


export default connect(mapStateToProps, mapDispatchToProps)(Random);

