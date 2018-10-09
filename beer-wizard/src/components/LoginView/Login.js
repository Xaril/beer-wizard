import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 0,
        }
    }

    componentDidMount() {
        if (window.sessionStorage.name !== undefined) {
            this.props.getUser(window.sessionStorage.name)
        }
    }

    render() {

        return (
            <div>
                <div onClick={() => this.setState({view: 1})}>
                    LOGIN
                </div>
                {this.state.view !== 1 ? null :
                    <div>
                        <LoginForm submit={this.props.login} close={() => this.setState({view: 0})} submitLabel={'LOGIN'} />
                    </div>
                }
                <div onClick={() => this.setState({view: 2})}>
                    REGISTER
                </div>
                {this.state.view !== 2 ? null :
                    <div>
                        <LoginForm submit={this.props.register} close={() => this.setState({view: 0})} submitLabel={'REGISTER'}/>
                    </div>
                }
            </div>
        )
    }
}

export default Login;
