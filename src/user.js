import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
    state = {
        users: [],
        posts: [],
        elementId: '',
        sortType: 'asc'
    }

    sortHandler = () => {
        // const { users } = this.state;
        // const username = users.map(item => item.name);
        // const usernames = username.sort();
        // console.log(usernames)
        const { users, posts, elementId, sortType } = this.state;
        const sorted = users.sort((a, b) => {
            const isReversed = (sortType === 'asc') ? 1 : -1;
            return isReversed * a.name.localeCompare(b.name)
        })
        this.setState({ sorted: users })

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
        // const sorted = users.sort((a, b) => {
        //     const isReversed = (sortType === 'asc') ? 1 : -1;
        //     return isReversed * a.name.localeCompare(b.name)
        // })
        return (
            <table style={{ width: '100vw' }}>
                <thead>
                    <th onClick={this.sortHandler}>name</th>
                    <th>email</th>
                    <th>address</th>
                </thead>
                <tbody>
                    {users.map((item, index) =>
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
