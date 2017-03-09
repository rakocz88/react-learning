import React, {Component} from 'react';
import TaskItem from './TaskItem.js';

export default class TaskColumn extends Component {


  constructor(props){
    super(props);
    this.filterTask = this.filterTask.bind(this);
  }

  filterTask(elem){
    console.log(elem);
    return this.props.isTaskFilterActive(elem);
  }

  render(){

    let columnType = this.props.columnType;
    console.log("tasks before filter");
    console.log(this.props.tasks);
    let filteredTasks = this.props.tasks.filter(task => task.status === columnType).filter(filteredTask => this.filterTask(filteredTask.type));
    console.log("Filtered tasks");
    console.log(filteredTasks);
    return (

      <div className = "taskColumn">
      <ul>
        {filteredTasks.map(task => <TaskItem key = {task.id} value = {task.name} />)}
      </ul>
      </div>
    )
  }
}
