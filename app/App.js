import React from 'react';
import {render} from 'react-dom';
import TaskContainer from './components/TaskContainer.js';




require("../node_modules/materialize-css/bin/materialize.css");
window.jQuery = window.$ = require('jquery');
//window.jQuery = require("../node_modules/materialize-css/bin/jquery-2.1.1.min");
require("../node_modules/materialize-css/bin/materialize.js");
require("./css/style.less");
require("./css/style.scss");



class App extends React.Component {
  render(){
    return (
      <TaskContainer></TaskContainer>
    );
  }
}

render(<App />, document.getElementById('root'));
