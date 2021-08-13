import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import StrictAccess from './StrictAccess';

const user = {
  username: 'joao',
  password: 1234,
}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/StrictAccess" render= { (props) => <StrictAccess {...props} {...user} />}></Route>
            <Route path="/Users/:id" render={ (props) => <Users {...props}  greetingsMessage="Good Morning"/>}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/" component={Home}/>
            <Link to="StrictAccess"> StrictAccess </Link>
            <Link to="/About" > About </Link>
            <Link to="/Users" > Users </Link>
            <Link to="/" > Home </Link>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
