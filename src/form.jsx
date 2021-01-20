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
        isValid: 'valid'
    };
    inputHandler = e => {
        console.log(e.target.value)
        const { value, name } = e.target;
        this.setState((prevState) => ({ ...prevState, data: { ...prevState.data, [name]: value } }))

    }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state.data)
    }
    changeDirect = () => {
        const { name, phone, email, password } = this.state.data;

        this.props.history.push("/movies")
        this.setState()
        { !name && !phone && this.setState({ isValid: "notValid" }) }
    }
    render() {
        console.log(this.state)
        const { name, phone, email, password } = this.state.data;
        const { isValid } = this.state;
        return (
            <div className="form">

                <form action="" onSubmit={this.submitHandler}>
                    <h3>Sign up</h3>
                    <div className="inputs">
                        <label htmlFor="">
                            name{<span style={{ visibility: "hidden" }}>sdsfasfdfeggeeve</span>}{!name && isValid === 'notValid' && <span style={{ color: "red" }} >Please enter name</span>}
                        </label>
                        <div className="logo-input">
                            <div className="icon">
                                <FiUser />
                            </div>
                            <input
                                onChange={this.inputHandler}
                                type="text"
                                name="name"
                                defaultValue={this.state.data.name}
                            />
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="">
                            phone{<span style={{ visibility: "hidden" }}>sdsfasfdfeggeee</span>}{!phone && isValid === 'notValid' && <span style={{ color: "red" }} >Please enter phone</span>}
                        </label>
                        <div className="logo-input">
                            <div className="icon">
                                <AiOutlinePhone />
                            </div>
                            <input onChange={this.inputHandler} type="tel" name="phone" defaultValue={this.state.data.phone} />
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="">
                            email{<span style={{ visibility: "hidden" }}>sdsfasfdfeggeevc</span>}{!email && isValid === 'notValid' && <span style={{ color: "red" }} >Please enter email</span>}
                        </label>
                        <div className="logo-input">
                            <div className="icon">
                                <AiOutlineMail />
                            </div>
                            <input onChange={this.inputHandler} type="email" name="email" defaultValue={this.state.data.email} />
                        </div>
                    </div>
                    <div className="inputs">
                        <label htmlFor="">
                            password{<span style={{ visibility: "hidden" }}>sdsfdsaececc</span>}{!password && isValid === 'notValid' && <span style={{ color: "red" }} >Please enter password</span>}
                        </label>
                        <div className="logo-input">
                            <div className="icon">
                                <RiLockPasswordLine />
                            </div>
                            <input onChange={this.inputHandler} type="password" name="password" defaultValue={this.state.data.password} />
                        </div>
                    </div>
                    {!name ? <button onClick={this.changeDirect} id="button" type="button">Send</button> : <button id="button">Send</button>}
                    <p>Do you have an account? <Link to="/signin">Signin now</Link></p>
                </form>
            </div >
        )
    }
}
