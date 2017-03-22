import React, {Component} from 'react';
import 'whatwg-fetch';
import TaskBoard from './Tasks/board/TaskBoard.js';
import TaskTypeFilter from './Tasks/board/TaskTypeFilter.js';
import update from 'react-addons-update';
import TaskActionsDiv from './Tasks/actionDiv/TaskActionsDiv';
import SDCMenu from './menu/SDCMenu.js';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class TaskContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [], types: []};
        this.filterActiveTasks = this.filterActiveTasks.bind(this);
        this.changeFilterValue = this.changeFilterValue.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
        this.updateTaskStatus = this.updateTaskStatus.bind(this);
        this.changeTask = this.changeTask.bind(this);
    }

    addNewTask(task) {
        let oldState = this.state;
        let newState = update(this.state, {
            tasks: {
                $push: [task]
            }
        });
        this.setState(newState);
    }

    updateTaskStatus(taskId, taskStatus) {
        let oldState = this.state;
        let index = this.state.tasks.findIndex(task => task.id == taskId);
        let newState = update(this.state, {tasks: {[index]: {$merge: {status: taskStatus}}}});
        this.setState(newState);
    }

    filterActiveTasks(elem) {
        let result = this.state.types.map(type1 => type1).filter(type => type.type === elem).filter(filteredType => filteredType.active).length > 0;
        return result
    }

    changeFilterValue(inputType) {

        this.setState({filters: this.props.types});
        let index = this.state.types.findIndex((taskType => taskType.type === inputType));
        var changedBool;

        let changedFilterElems = update(this.state.types,
            {
                [index]: {
                    active: {$set: !this.state.types[index].active}
                }
            }
        );

        this.setState({types: changedFilterElems});
    }

    changeTask(updatedTask) {
        let tasks = this.state.tasks;
        let taskIndex = tasks.findIndex(task => task.id == updatedTask.id);
        let newState = update(this.state , {tasks : {[taskIndex] : {$set : updatedTask}}});
        this.setState(newState);
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

        let isChildContainer = this.props.children !== null;
        let children = this.props.children && React.cloneElement(this.props.children, {
                tasks: this.state.tasks,
                callbacks: {changeTask: this.changeTask}})

        return (
            <div id="containerWithActions" className="container">
                <SDCMenu></SDCMenu>
                <div className={isChildContainer ? "no-display" : ""}>
                    <TaskTypeFilter types={this.state.types} taskCallbacks={ {changeFilter:this.changeFilterValue} }/>
                    <TaskActionsDiv types={this.state.types} callbacks={{addTask : this.addNewTask}}/>
                    <TaskBoard tasks={tasks}
                               taskCallbacks={{filter:  this.filterActiveTasks, updateTaskStatus : this.updateTaskStatus}}/>
                </div>
                <div className={!isChildContainer ? "no-display" : ""}>
                    {children}
                </div>

            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(TaskContainer);
