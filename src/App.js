import React, { Component } from 'react'
import './App.css';
import Movie_list from './containers'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './containers/Navbar/nav';
import User from './user';
import Form from './form';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/users">
              <User />
            </Route>
            <Route path="/movies">
              <Movie_list />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
