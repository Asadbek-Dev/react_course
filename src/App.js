import React, { Component } from 'react'
import './App.css';
import Movie_list from './containers'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './containers/Navbar/nav';
// import { BounceLoader, BarLoader, BeatLoader } from "react-spinner";
import User from './user';
import Form from './form';
import Posts from './component/Posts';

class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <BounceLoader loading />
        <BarLoader loading />
        <BeatLoader loading /> */}
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/users" component={User} />
            <Route path="/movies">
              <Movie_list />
            </Route>
            <Route path="/form" component={Form} />
            <Route path="/posts/:id" component={Posts} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
