import React, { Component } from 'react';
import Header from '../../shared-components/Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", password: ""}
    }

    nameChange = (event) => {
        this.setState({name: event.target.value});
    }

    passwordChange = (event) => {
        this.setState({password: event.target.value});
    }

    handleSubmit = (event) => {
        console.log("Login in with name", this.state.name, " and password", this.state.password);
        //this.props.login(this.state.name, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Header header="Home"/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.nameChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.passwordChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Home;
