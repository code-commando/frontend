import React, { Component } from 'react';
import Roster from './Roster';

export default class Random extends Component {
  render() {
    return (
      <div>
        <h1>Random Title</h1>
        <p>random pairs and random student</p>
        
        <ul>
          <Roster />
        </ul>
      </div>
    );
  }
}
