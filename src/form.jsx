import React, { Component } from 'react'
import './movies.css'
import { FiUser } from "react-icons/fi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
export default class Form extends Component {
    state = {
        data: {
            name: '',
            phone: '',
            email: '',
            password: ''
        },

    }
    inputHandler = e => {
        console.log(e.target.value)
        const { value, name } = e.target;
        this.setState((prevState) => ({ ...prevState, data: { ...prevState.data, [name]: value } }))

    }
    changeHandler
    render() {
        console.log(this.state)
        const { name } = this.state.data;
        return (
            <div className="form">

                <form action="" onSubmit={this.changeHandler}>
                    <h1>Sign up</h1>
                    <div className="inputs">
                        <label htmlFor="">
                            name
                    </label>
                        <div className="logo-input">
                            <div className="icon">
                                <FiUser />
                            </div>
                            <input onChange={this.inputHandler} type="text" name="name" required />
                        </div>

                    </div>
                    <div className="inputs">
                        <label htmlFor="">
                            phone
                    </label>
                        <div className="logo-input">
                            <div className="icon">
                                <AiOutlinePhone />
                            </div>
                            <input onChange={this.inputHandler} type="tel" name="phone" required />
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="">
                            email
                    </label>
                        <div className="logo-input">
                            <div className="icon">
                                <AiOutlineMail />
                            </div>
                            <input onChange={this.inputHandler} type="email" name="email" required />
                        </div>

                    </div>
                    <div className="inputs">
                        <label htmlFor="">
                            password
                    </label>
                        <div className="logo-input">
                            <div className="icon">
                                <RiLockPasswordLine />
                            </div>
                            <input onChange={this.inputHandler} type="password" name="password" required />
                        </div>

                    </div>

                    {!name ? <button type="button" id="button">Sign up</button> : <button type="submit" id="button">Sign up</button>}
                    <p>Do you have an account? <Link>Signin now</Link></p>
                </form>
            </div>
        )
    }
}
