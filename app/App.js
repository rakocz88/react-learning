import React from 'react';
import {render} from 'react-dom';
import TaskContainer from './components/Tasks/TaskContainer.js';
import TaskDetails from './components/Tasks/details/TaskDetails.js';
import NotFound from './components/static/NotFound.js';
import Login from './components/login/Login.js';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Baner from './components/static/Baner.js';


require("../node_modules/materialize-css/bin/materialize.css");
window.jQuery = window.$ = require('jquery');
//window.jQuery = require("../node_modules/materialize-css/bin/jquery-2.1.1.min");

let Materialize = require("../node_modules/materialize-css/bin/materialize.js");

require("./css/style.less");
require("./css/style.scss");


class App extends React.Component {
    render() {
        return (
            <div className = "body container-image">
                <Baner/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login}>
            </IndexRoute>
            <Route path="/user">
                <Route path="/board" component={TaskContainer}>
                    <Route path="/task/details/:id" component={TaskDetails}/>
                </Route>
            </Route>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
    , document.getElementById('root'));
