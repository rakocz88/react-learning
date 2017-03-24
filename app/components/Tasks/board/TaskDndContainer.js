import React, {Component} from 'react';
import 'whatwg-fetch';
import TaskBoard from './TaskBoard.js';
import TaskTypeFilter from './TaskTypeFilter.js';
import update from 'react-addons-update';
import TaskActionsDiv from './../actionDiv/TaskActionsDiv';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TaskActionCreator from './../../../actions/TaskActionCreator';


class TaskDndContainer extends Component {
    constructor(props) {
        super(props);
        this.changeFilterValue = this.changeFilterValue.bind(this);
    }

    changeFilterValue(inputType) {

        let index = this.props.types.findIndex((taskType => taskType.type === inputType));
        var changedBool;

        let changedFilterElems = update(this.props.types,
            {
                [index]: {
                    active: {$set: !this.props.types[index].active}
                }
            }
        );
    }

    componentDidMount() {
        TaskActionCreator.getTasks();
    }

    render() {
        let tasks = this.props.tasks;

        return (
            <div>
                <TaskTypeFilter types={this.props.types} />
                <TaskActionsDiv types={this.props.types} callbacks={{addTask : this.addNewTask}}/>
                <TaskBoard tasks={tasks}/>
            </div>

        )
    }
}

export default DragDropContext(HTML5Backend)(TaskDndContainer);
;
