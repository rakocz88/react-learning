import React, {Component} from 'react';
import TaskItem from './TaskItem.js';
import {DropTarget} from 'react-dnd';
import constants from './../../constants.js';

let spec = {
   drop(props){
        return {status : props.columnType}
    }

}

let collect = (connector, monitor)=> {
    return {
        connectDropTarget : connector.dropTarget(),
        isOver : monitor.isOver(),
        canDrop : monitor.canDrop()
}
}


class TaskColumn extends Component {


    constructor(props) {
        super(props);
        this.filterTask = this.filterTask.bind(this);
    }

    filterTask(elem) {
        return this.props.isTaskFilterActive(elem);
    }

    render() {

        let {connectDropTarget, isOver, canDrop, columnType, columnDesc} = this.props;
        let filteredTasks = this.props.tasks
            .filter(task => task.status === columnType)
            .filter(filteredTask => this.props.taskCallbacks.filter(filteredTask.type));
        let columnClass = "col s4 task-column ";
        if (isOver && canDrop){
            columnClass= columnClass.concat("can-drop");
        }
        else if (isOver){
            columnClass= columnClass.concat("cant-drop");
        }
        return connectDropTarget(
            <div className={columnClass}>
                <div className="column-header"> {columnDesc} </div>
                {filteredTasks.map(task => <TaskItem key={task.id} value={task.name} id={task.id} desc = {task.desc} updateTaskStatus = {this.props.taskCallbacks.updateTaskStatus}/>)}

            </div>
        )
    }
}

export default DropTarget(constants.Task, spec, collect)(TaskColumn);
