import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
    state = {
        users: [],
        posts: [],
        elementId: ''
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
        const { users, posts, elementId } = this.state;
        console.log(posts)
        return (
            <table>
                <thead>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>address</th>
                </thead>
                <tbody>
                    {users.map((item, index) =>
                        <tr key={index} >
                            <td onClick={() => this.props.history.push(`/posts/${item.id}`)}>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>

                        </tr>
                    )}
                </tbody>
            </table >
        )
    }
}
