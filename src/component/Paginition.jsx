import React, { Component } from 'react'
import _ from 'lodash'

export default class Paginition extends Component {
    render() {
        const { onTakeCurrentPage, count, pageSize, currentPage } = this.props;
        console.log(this.props)
        const countPages = Math.ceil(count / pageSize);
        const pages = _.range(1, countPages + 1)
        console.log(pages)
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        pages.map(item => (
                            <li onClick={() => onTakeCurrentPage(item)} class={item === currentPage ? "page-item active" : "page-item"}>
                                <button className="page-link">
                                    {item}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        )
    }
}
