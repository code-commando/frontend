import React, {Component} from 'react';

export default class NavBar extends Component {
  render() {
    return(
      <React.Fragment>
        <ul className='navbar'>
          <li>My Classes</li>
          <li>Random</li>
          <li>Quiz</li>
          <li>Slides</li>
          <li>Repl</li>
        </ul>
      </React.Fragment>
    );
  }
} 