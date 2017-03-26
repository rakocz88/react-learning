import React, {Component} from 'react';


class LoginForm extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="LoginForm container container-small row" >
                <div className="row">
                    <div className="input-field col s3">
                    </div>
                    <div className="input-field col s6">
                        <input id="loginName" type="text" onChange={this.props.callbacks.changeLogin}
                               className="validate"/>
                        <label htmlFor="loginName">Login</label>
                    </div>
                    <div className="input-field col s3">
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s3">
                    </div>
                    <div className="input-field col s6">
                        <input id="password" type="password" onChange={this.props.callbacks.changePassword}
                               className="validate"/>
                        <label htmlFor="password">Password </label>
                    </div>
                    <div className="input-field col s3">
                    </div>
                </div>

                <div className="row login-buttons">
                    <button type="button" className="waves-effect waves-light btn" onClick={this.props.callbacks.login}> <i className="fa fa-sign-in" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}

export default LoginForm;