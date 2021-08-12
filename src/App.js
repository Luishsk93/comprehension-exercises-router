import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={Home}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
