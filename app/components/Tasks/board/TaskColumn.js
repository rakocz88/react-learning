import React, {Component} from 'react';
import TaskItem from './TaskItem.js';
import {DropTarget} from 'react-dnd';
import constants from './../../constants.js';
import TaskTypeFilterStore from './../../../stores/TaskTypeFilterStore'

let spec = {
    drop(props){
        return {status: props.columnType}
    }
}

let collect = (connector, monitor)=> {
    return {
        connectDropTarget: connector.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

class TaskColumn extends Component {

    constructor(props) {
        super(props);
        this.filterTask = this.filterTask.bind(this);
        this.filterActiveTasks = this.filterActiveTasks.bind(this);
    }

    filterTask(elem) {
        return this.props.isTaskFilterActive(elem);
    }

    filterActiveTasks(elem) {
        return TaskTypeFilterStore.getState().map(type1 => type1).filter(type => type.type === elem).filter(filteredType => filteredType.active).length > 0;

    }

    render() {
        let {connectDropTarget, isOver, canDrop, columnType, columnDesc} = this.props;
        let filteredTasks = this.props.tasks
            .filter(task => task.status === columnType)
            .filter(filteredTask => this.filterActiveTasks(filteredTask.type));
        let columnClass = "col s4 task-column ";
        if (isOver && canDrop) {
            columnClass = columnClass.concat("can-drop");
        }
        else if (isOver) {
            columnClass = columnClass.concat("cant-drop");
        }
        return connectDropTarget(
            <div className={columnClass}>
                <div className="column-header"> {columnDesc} </div>
                {filteredTasks.map(task => <TaskItem key={task.id} value={task.name} id={task.id} desc={task.desc}/>)}

            </div>
        )
    }
}

export default DropTarget(constants.Task, spec, collect)(TaskColumn);
