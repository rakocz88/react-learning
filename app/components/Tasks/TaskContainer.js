import React, {Component} from 'react';
import 'whatwg-fetch';
import TaskBoard from './board/TaskBoard.js';
import TaskTypeFilter from './board/TaskTypeFilter.js';
import update from 'react-addons-update';
import TaskActionsDiv from './actionDiv/TaskActionsDiv';
import SDCMenu from './../menu/SDCMenu.js';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TaskStore from './../../stores/TaskStore';
import TypeStore from './../../stores/TypeStore';
import TaskActionCreator from './../../actions/TaskActionCreator';
import {Container} from 'flux/utils';
import TaskDndContainer from './board/TaskDndContainer'


class TaskContainer extends Component {
    constructor(props) {
        super(props);
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
        let newState = update(this.state, {tasks: {[taskIndex]: {$set: updatedTask}}});
        this.setState(newState);
    }


    componentDidMount() {
        TaskActionCreator.getTasks();
    }

    render() {


       let tasks = TaskStore.getState();

        let isChildContainer = this.props.children !== null;
        let children = this.props.children && React.cloneElement(this.props.children, {
                tasks: this.state.tasks
            })

        return (
            <div id="containerWithActions" className="container">
                <SDCMenu></SDCMenu>
                <div className={isChildContainer ? "no-display" : ""}>
                    <TaskDndContainer types = {this.state.types} tasks = {this.state.tasks} />
                </div>
                <div className={!isChildContainer ? "no-display" : ""}>
                    {children}
                </div>

            </div>
        )


    }

}

TaskContainer.getStores = () => ([TaskStore, TypeStore]);
TaskContainer.calculateState =
    (prevState)=>
        ({tasks: TaskStore.getState(), types: TypeStore.getState()});

export default Container.create(TaskContainer);

