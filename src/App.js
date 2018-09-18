import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


import './App.css';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Dashboard} />
      </BrowserRouter>
    );
  }
}

export default App;
