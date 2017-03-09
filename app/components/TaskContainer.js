import React, {Component} from 'react';
import 'whatwg-fetch';
import TaskBoard from './TaskBoard.js';
import TaskTypeFilter from './TaskTypeFilter.js';

export default class TaskContainer extends Component {
  constructor (props){
    super(props);
    this.state = {tasks : [], types : []};
    this.filterActiveTasks = this.filterActiveTasks.bind(this);
  }

  filterActiveTasks(elem){
    console.log("Correct Filter")
    console.log(this.state.types);
    console.log(elem);
    let result = this.state.types.map(type1 => type1).filter(type => type.type === elem).filter(filteredType => filteredType.active).length > 0;
    console.log(result);
    return result
  }

  componentDidMount(){
      fetch('./data/tasks.json')
        .then(response => response.json())
          .then(data => this.setState({"tasks": data.tasks}))


        fetch('./data/taskTypes.json')
          .then(response => response.json())
            .then(data => this.setState({"types": data.types}))


  }



  render (){


    return (
      <div className = "TaskContainer">

        <TaskBoard tasks = {this.state.tasks} isTaskFilterActiveContainer = {this.filterActiveTasks}/>
        <TaskTypeFilter types = {this.state.types}/>
      </div>
    )
  }
}
