import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import Qator from '../component/Qator'
import Like from '../component/Like'
import Dislike from '../component/Dislike'
import Delete from '../component/Delete'
import moviesDb from '../db/fakeMovies'
import fakeGenres from '../db/fakeGenres'
import { Col, Row } from 'react-bootstrap'
import Index from '../Genres'
import Paginition from '../component/Paginition'
import paginate from '../component/paginate';



let updated = [];

export default class Movie_list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [],
            pageSize: 3,
            genre: 'all',
            currentPage: 1,
            sortType: 'asc'
        }
    }
    componentDidMount() {
        this.setState({ movies: moviesDb, genres: fakeGenres });
    }

    likeHandler = (item) => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(item)
        movies[index] = { ...movies[index], like: !movies[index].like }
        this.setState({ movies });
    };
    deleteHandler = (id) => {
        const result = this.state.movies.filter(item => item.id !== id)
        this.setState({ movies: result });
    };

    onTakeCurrentPage = (currentPage) => {
        this.setState({ currentPage })
    }

    genreHandler = genre => {
        const movies = moviesDb;
        const res = movies.filter(m => m.genre === genre)
        res.length ? this.setState({ genre, movies: res, currentPage: 1 }) : this.setState({ genre, movies: moviesDb })

    }
    sortHandler = () => {
        const { movies, sortType } = this.state;
        const sorted = movies.sort((a, b) => {
            const isReversed = (sortType === 'asc') ? 1 : -1;
            return isReversed * a.title.localeCompare(b.title)
        })
        this.setState({ sorted: movies })

    }
    sortHandler1 = () => {
        const { movies, sortType } = this.state;
        const sorted = movies.sort((a, b) => {
            const isReversed = (sortType === 'asc') ? 1 : -1;
            return isReversed * a.genre.localeCompare(b.genre)
        })
        this.setState({ sorted: movies })

    }
    sortHandler2 = () => {
        const { movies, sortType } = this.state;
        const sorted = movies.sort((a, b) => parseFloat(a) > parseFloat(b))
        this.setState({ sorted: movies })

    }



    render() {
        const { movies, genres, pageSize, currentPage, genre } = this.state;
        updated = paginate(movies, currentPage, pageSize);
        const count = movies.length;
        console.log(pageSize, count)

        return (<div>
            < h4 > Showing {updated.length} movies in the database.</h4 >
            {updated.length === 0 ? <h1>No movies</h1> :
                <Row>
                    <Col>
                        <Index genre={genre} onGenreChange={this.genreHandler} data={genres} />
                    </Col>
                    <Col>
                        <table>
                            <tr>
                                <th onClick={this.sortHandler}>Title</th>
                                <th onClick={this.sortHandler1}>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                                <th></th>
                            </tr>
                            {updated.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.rate}</td>
                                    <td>
                                        <div onClick={() => { this.likeHandler(item) }}>
                                            {item.like ? <Like /> : <Dislike />}
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => { this.deleteHandler(item.id) }}>
                                            <Delete />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </table>
                        <Paginition pageSize={pageSize} currentPage={currentPage} count={count} onTakeCurrentPage={this.onTakeCurrentPage} />
                    </Col>
                </Row>}
        </div>
        )
    }
}