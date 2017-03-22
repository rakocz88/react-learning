import React, {Component} from 'react';


class LoginForm extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <form className="LoginForm container container-small row" onSubmit={this.props.callbacks.login}>
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

                <div className="row">
                    <button type="submit" className="waves-effect waves-light btn"> Login</button>
                </div>
            </form>
        )
    }
}

export default LoginForm;