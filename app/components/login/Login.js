import React, {Component} from 'react';
import update from 'react-addons-update';
import LoginForm from './LoginForm.js';
import {hashHistory} from 'react-router';


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
            Materialize.toast('Niepoprawne hasło lub login', 6000, 'red') // 4000 is the duration of the toast
        }
        else {
            hashHistory.push("/board");
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