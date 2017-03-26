import React, {Component} from 'react';
import 'whatwg-fetch';
import SDCMenu from './../menu/SDCMenu.js';
import TaskStore from './../../stores/TaskStore';
import TypeStore from './../../stores/TypeStore';
import TaskActionCreator from './../../actions/TaskActionCreator';
import {Container} from 'flux/utils';
import TaskDndContainer from './board/TaskDndContainer'
import TypeActionCreator from './../../actions/TypeActionCreator'
import TaskTypeFilterStore from './../../stores/TaskTypeFilterStore'
import TaskDetailsStore from './../../stores/TaskDetailsStore'


class TaskContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        TaskActionCreator.getTasks();
        TypeActionCreator.getTypes();
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
                    <TaskDndContainer types={this.state.types} tasks={this.state.tasks} filters={this.state.filters}/>
                </div>
                <div className={!isChildContainer ? "no-display" : ""}>
                    {children}
                </div>
            </div>
        )
    }
}
TaskContainer.getStores = () => ([TaskStore, TypeStore, TaskTypeFilterStore, TaskDetailsStore]);
TaskContainer.calculateState =
    (prevState)=>
        ({tasks: TaskStore.getState(), types: TypeStore.getState(), filters: TaskTypeFilterStore.getState(), taskDetails : TaskDetailsStore.getState()});

export default Container.create(TaskContainer);

