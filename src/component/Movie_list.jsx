import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import Qator from './Qator'
import Like from './Like'
import Dislike from './Dislike'
import Delete from './Delete'
export default class Movie_list extends Component {
    state = {
        movies: [{
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
        },]
    }
    likeHandler = (item) => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(item)
        movies[index] = { ...movies[index], like: !movies[index].like }
        this.setState({ movies });
        console.log(item.id)
    };
    clickHandler = (id) => {
        const result = this.state.movies.filter(item => item.id !== id)
        console.log(result)
        this.setState({ movies: result });
    };

    render() {

        return (<div>
            < h4 > Showing {this.state.movies.length} movies in the database.</h4 >
            {this.state.movies.length === 0 ? <h1>No movies</h1> : <table>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
                {this.state.movies.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.genre}</td>
                        <td>{item.stock}</td>
                        <td>{item.rate}</td>
                        <td>
                            <div onClick={() => { this.likeHandler(item) }}>
                                {item.like ? this.props.like : this.props.dislike}
                            </div>
                        </td>
                        <td>
                            <div onClick={() => { this.clickHandler(item.id) }}>
                                <Delete />
                            </div>
                        </td>
                    </tr>
                ))}
            </table>}</div>
        )
    }
}