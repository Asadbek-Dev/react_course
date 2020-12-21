import React, { Component } from 'react'
import './App.css';
import Like from './component/Like'
import Dislike from './component/Dislike'
import Delete from './component/Delete'
import Qator from './component/Qator'
import Movie_list from './component/Movie_list'

class App extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: 'Terminator',
        genre: 'Action',
        stock: 6,
        rate: 2.5,
        like: true
      },
      {
        id: 2,
        title: 'Die Hard',
        genre: 'Action',
        stock: 5,
        rate: 2.5,
        like: false
      },
      {
        id: 3,
        title: 'Get Out',
        genre: 'Thriller',
        stock: 8,
        rate: 3.5,
        like: false

      },
      {
        id: 4,
        title: 'Trip to Italy',
        genre: 'Comedy',
        stock: 7,
        rate: 3.5,
        like: false

      },
      {
        id: 5,
        title: 'Airplane',
        genre: 'Comedy',
        stock: 7,
        rate: 3.5,
        like: false
      },
    ],
    like: <Like />,
    dislike: <Dislike />,


  };
  // likeHandler = (item) => {
  //   const movies = [...this.state.movies]
  //   const index = movies.indexOf(item)
  //   movies[index] = { ...movies[index], like: !movies[index].like }
  //   this.setState({ movies });
  // }

  render() {
    return (
      <div className="App" >
        <Movie_list like={this.state.like} dislike={this.state.dislike} movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
