import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route exact path="/About" component={About}/>
          <Route exact path="/" component={Home}/>
        </BrowserRouter>
    );
  }
}

export default App;
