import React, { Component } from 'react';
import Header from '../../shared-components/Header';

class LoginForm extends Component {
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
        this.props.submit(this.state.name, this.state.password);
        this.setState({password: ''})
    }

    render() {
        return (
            <div style={{}}>
                <div style={{display: 'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div style={{fontSize: 10}}>
                            Name:
                        </div>
                        <input type="text" style={{}} value={this.state.name} onChange={this.nameChange} onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                this.handleSubmit(e)
                            }
                        }}/>
                    </div>
                    <div style={{flexGrow: 1}}>
                        <div style={{fontSize: 10}}>
                            Password:
                        </div>
                        <input type="password" style={{}} value={this.state.password} onChange={this.passwordChange} onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                this.handleSubmit(e)
                            }
                        }}/>
                    </div>
                    <div style={{flexGrow: 0}} onClick={this.props.close}>
                        CLOSE
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', }}>
                    <div style={{flexGrow: 0, padding: '2%', background: 'yellow', borderRadius: '10px'}} onClick={this.handleSubmit} >
                        {this.props.submitLabel}
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
