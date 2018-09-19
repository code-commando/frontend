import React, { Component, Fragment } from 'react';
// import su


export default class Roster extends Component {

  componentWillMount() {

  }



  render() {
    return (
      <Fragment>
        <h1>Roster</h1>
        <ul>
          <li>

          </li>
        </ul>

        <form>
          <label>edit student</label>
          <label>name</label>
          <input type="text" />
          <label>name</label>
          <input type="text" />
          <label>name</label>
          <input type="text" />

          <input type="button" value="edit" />
          <input type="button" value="delete" />

        </form>
      </Fragment>
    );
  }
}