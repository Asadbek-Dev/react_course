import React, { Component } from 'react'

export default class Posts extends Component {
    state = {
        posts: [],

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(res => {
                const posts = res.filter(m => m.userId == this.props.match.params.id)
                this.setState({ posts })
            })


    }
    render() {
        const { id, posts } = this.state;
        return (
            <div>
                <tbody>
                    {posts.map((item, index) =>
                        <tr key={index} >
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    )}
                </tbody>
            </div>
        )
    }
}
