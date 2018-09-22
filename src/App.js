import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from '../src/store/store.js';


import './App.css';
import SignIn from './components/SignIn.js';
import Dashboard from './components/Dashboard.js';
// import Dashboard from './components/Dashboard2.js';
import Courses from './components/Courses.js';
import Roster from './components/Roster.js';
import Random from './components/Random.js';
import Quiz from './components/Quiz.js';
import CodeRunner from './components/CodeRunner.js';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route exact path='/' component={SignIn} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/courses' component={Courses} />
            <Route path='/roster' component={Roster} />
            <Route path='/random' component={Random} />
            <Route path='/quiz' component={Quiz} />
            <Route path='/coderunner' component={CodeRunner} />
            <Route path='/signin' component={SignIn} />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
