import React, { Component } from 'react'

export default class User extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ users }))

    }
    render() {
        const { users } = this.state;
        console.log(users)
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
                        <tr key={index}>
                            <td>{item.name}</td>
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
