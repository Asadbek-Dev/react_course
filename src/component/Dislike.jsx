import React, { Component } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
const style = { cursor: 'pointer' }

export default class Like extends Component {
    render() {
        return <AiOutlineHeart style={style} />
    }
}