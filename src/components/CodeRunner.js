import React, { Component, Fragment } from 'react';
import style from '../style/style.js';

const main = {
  background: '#D6D6D6',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  textAlign: 'center',
};

export default class CodeRunner extends Component {
  render() {
    return (
      <Fragment>
        <style.NavBar />
        <div style={style.style.borderStyle}>
          <h1>Code runner</h1>
        </div>
      </Fragment>
    );
  }
}
