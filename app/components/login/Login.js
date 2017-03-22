import React, {Component} from 'react';
import update from 'react-addons-update';
import LoginForm from './LoginForm.js';

class Login extends Component {

    constructor() {
        super();
        this.state = {login: "", password: ""};
        this.changeLoginName = this.changeLoginName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.login = this.login.bind(this);
    }

    changeLoginName(event) {
        let loginValue = event.target.value;
        let oldState = this.state;
        let newState = update(this.state, {login: {$set: loginValue}});
        this.setState(newState);
    }


    changePassword(event) {
        let newPassword = event.target.value;
        let oldState = this.state;
        let newState = update(this.state, {password: {$set: newPassword}})
        this.setState(newState);
    }

    login() {
        if (this.state.login !== this.state.password) {
            alert("Nieudane logowanie");
        }
        else {
            this.props.history.pushState(null, "/board");
        }
    }

    render() {
        return (
            <div>
                <LoginForm
                    callbacks={{changeLogin : this.changeLoginName, changePassword : this.changePassword , login : this.login}}/>
            </div>
        )
    }
}

export default Login;