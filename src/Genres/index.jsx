import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        const { data, onGenreChange, genre } = this.props;
        return (
            <ul class="list-group">
                <li onClick={() => onGenreChange('all')} key={'all'} className={'all' === genre ? "list-group-item active" : "list-group-item"} aria-current="true">
                    All types
                    </li>
                {data.map((item) => (
                    <li onClick={() => onGenreChange(item.title)} key={item.id} className={item.title === genre ? "list-group-item active" : "list-group-item"} aria-current="true">
                        {item.title}
                    </li>
                ))}
            </ul>
        )
    }
}
