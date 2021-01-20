
import React from "react";
// import "./styles.css";

export default class Form extends React.Component {
    state = {
        data: {
            name: ""
        },
        isValid: 'valid'
    };
    inputHandler = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            data: { ...prevState.data, [name]: value }
        }));
    };
    render() {
        console.log(this.state.data);
        const { isValid } = this.state;
        const { name } = this.state.data;
        return (
            <div className="App">
                <h1>Hello </h1>
                <p> Input value : {name} </p>
                <form>
                    <input
                        onChange={this.inputHandler}
                        defaultValue={this.state.data.name}
                        type="text"
                        name="name"
                    />
                    {!name && isValid === 'notValid' && <p style={{ color: "red" }} >Please enter name</p>}
                    {!name ? <button onClick={() => { !name && this.setState({ isValid: "notValid" }) }} type="button">Send</button> : <button>Send</button>}
                </form>
            </div>
        );
    }
}