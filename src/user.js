import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import _ from 'lodash'

export default class User extends Component {
    state = {
        users: [],
        posts: [],
        elementId: '',
        sortType: 'asc'
    }

    sortHandler = () => {
        const { sortType } = this.state;
        const value = (sortType === 'asc') ? 'desc' : 'asc';
        this.setState({ sortType: value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ users }))
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({ posts }))

    }
    render() {
        const { users, posts, elementId, sortType } = this.state;
        const updated = _.orderBy(users, ['name'], sortType)
        console.log(updated)
        return (
            <table style={{ width: '100vw' }}>
                <thead>
                    <th onClick={this.sortHandler}>name{sortType === 'asc' ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}</th>
                    <th>email</th>
                    <th>address</th>
                </thead>
                <tbody>
                    {updated.map((item, index) =>
                        <tr key={index} >
                            <td onClick={() => this.props.history.push(`/posts/${item.id}`)} style={{ border: '1px solid #eee' }}>{item.name}</td>
                            <td style={{ border: '1px solid #eee' }}>{item.email}</td>
                            <td style={{ border: '1px solid #eee' }}>{item.address.city}</td>

                        </tr>
                    )}
                </tbody>
            </table >
        )
    }
}
