import React, {Component, PropTypes} from 'react' ;
import TaskColumn from './TaskColumn.js'


export default class TaskBoard extends Component {

  constructor(props){
    super(props);
    this.isTaskFilterActiveContainer2 = this.isTaskFilterActiveContainer2.bind(this);
  }


  isTaskFilterActiveContainer2(args){
    this.props.isTaskFilterActiveContainer(args);
  }







  render(){
    console.log('called render');
    return (
      <div>
        <TaskColumn tasks = {this.props.tasks} columnType = 'new' isTaskFilterActive = {this.isTaskFilterActiveContainer2}>  </TaskColumn>
        <TaskColumn tasks = {this.props.tasks} columnType = 'inProgress' isTaskFilterActive = {this.isTaskFilterActiveContainer2}>  </TaskColumn>
        <TaskColumn tasks = {this.props.tasks} columnType = 'done' isTaskFilterActive = {this.isTaskFilterActiveContainer2}>  </TaskColumn>
      </div>
    );
  }
}

TaskBoard.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
}
