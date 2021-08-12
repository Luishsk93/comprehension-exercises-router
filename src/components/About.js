import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p> My awesome About component </p>
        <Route path="/" component={Home}/>
      </div>
    );
  }
}

export default About;
