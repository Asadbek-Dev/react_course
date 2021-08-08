import React, { Component } from 'react'
import './App.css';
import Movie_list from './containers'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './containers/Navbar/nav';
import Loader from 'react-loader-spinner'
import User from './user';
import Form from './form';
import Posts from './component/Posts';

class App extends Component {
  state = {
    loading: true,
    data: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        this.setState({ data, loading: false })
      })
  }
  render() {
    const { loading } = this.state;

    return (
      <div className="App" >
        {loading ? <Loader
          type="loading"
          color="#00BFFF"
          height={100}
          width={100}

        /> : <BrowserRouter>
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
        }
      </div>
    );
  }
}

export default App;
