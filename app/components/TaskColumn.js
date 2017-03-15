import React, {Component} from 'react';
import TaskItem from './TaskItem.js';


export default class TaskColumn extends Component {


  constructor(props){
    super(props);
    this.filterTask = this.filterTask.bind(this);
  }

  filterTask(elem){
    return this.props.isTaskFilterActive(elem);
  }

  render(){

    let columnType = this.props.columnType;

    let filteredTasks = this.props.tasks
         .filter(task => task.status === columnType)
         .filter(filteredTask => this.props.taskCallbacks.filter(filteredTask.type));


    return (
    <div className="col s3 task-column">

        {filteredTasks.map(task => <TaskItem key = {task.id} value = {task.name} />)}

      </div>
    )
  }
}
