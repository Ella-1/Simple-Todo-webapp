import React, { Component } from "react";

class Forms extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // stops the default behaviour on refreshing a page
        e.preventDefault();
        console.group(this.state);
    }

    render(){
        return(
            <div>
                <h1>FORMS</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange}></input>
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange}></input>
                    <label htmlFor="belt">Belt: </label>
                    <input type="text" id="belt" onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


export default Forms;