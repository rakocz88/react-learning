import React, {Component} from 'react';
import 'whatwg-fetch';
import TaskBoard from './TaskBoard.js';
import TaskTypeFilter from './TaskTypeFilter.js';
import update from 'react-addons-update';
import TaskActionsDiv from './Tasks/actionDiv/TaskActionsDiv';
import SDCMenu from './menu/SDCMenu.js';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class TaskContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [], types: []};
        this.filterActiveTasks = this.filterActiveTasks.bind(this);
        this.changeFilterValue = this.changeFilterValue.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
        this.updateTaskStatus = this.updateTaskStatus.bind(this);
    }
    addNewTask(task){
        console.log("Add new task");
        let oldState = this.state;
        let newState = update(this.state,  { tasks : {
            $push : [task]}});
        this.setState(newState);
    }

    updateTaskStatus(taskId, taskStatus){
        let oldState = this.state;
        console.log("Task id is " + taskId);
        console.log(this.state.tasks);
        let index = this.state.tasks.findIndex(task => task.id == taskId);
        console.log("index");
        console.log(index);
        console.log(this.state.tasks[index]);
        let newState = update(this.state  , {tasks : {[index] : {$merge : {status : taskStatus}}}});
        this.setState(newState);
    }

    filterActiveTasks(elem) {
        let result = this.state.types.map(type1 => type1).filter(type => type.type === elem).filter(filteredType => filteredType.active).length > 0;
        return result
    }

    changeFilterValue(inputType){

        this.setState({filters :  this.props.types});
        let index = this.state.types.findIndex((taskType => taskType.type === inputType));
        var changedBool;

        let changedFilterElems = update(this.state.types ,
            {[index] :
                {active :
                    {$set : !this.state.types[index].active}
                }
            }
        );

        this.setState({types :  changedFilterElems});
    }


    componentDidMount() {
        fetch('./data/tasks.json')
            .then(response => response.json())
            .then(data => this.setState({"tasks": data.tasks}))
        fetch('./data/taskTypes.json')
            .then(response => response.json())
            .then(data => this.setState({"types": data.types}))
    }

    render() {
        let tasks = this.state.tasks;

        return (
            <div className="container">
                <SDCMenu></SDCMenu>
                <TaskTypeFilter types={this.state.types}  taskCallbacks  = { {changeFilter:this.changeFilterValue} }/>
                <TaskActionsDiv types={this.state.types} callbacks = {{addTask : this.addNewTask}} />
                <TaskBoard tasks={tasks} taskCallbacks={{filter:  this.filterActiveTasks, updateTaskStatus : this.updateTaskStatus}}/>


            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(TaskContainer);
