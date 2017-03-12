import React from 'react';
import {render} from 'react-dom';
import TaskContainer from './components/TaskContainer.js';


require("./css/style.less");


class App extends React.Component {
  render(){
    return (
      <TaskContainer></TaskContainer>
    );
  }
}

render(<App />, document.getElementById('root'));
