import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {DragSource} from 'react-dnd';
import constants from './constants.js';


let TaskItemSpec = {
    beginDrag(props, monitor, component){
        return {
            id: props.id
        };
    },
    endDrag(props, monitor, component){
        if (monitor.getDropResult()!== null) {
            let {status} =  monitor.getDropResult();
            let {id} = props;
            props.updateTaskStatus(id, status);
        }
    }
    /*    ,
     canDrag(){
     console.log("Can drag");
     }*/
    /* ,
     isDragging(){
     console.log("Is dragging");
     }*/
}

let collect = (connect, monitor)=> {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class TaskItem extends Component {

    render() {

        let {value, desc} = this.props;
        const {name, isDragging, connectDragSource} = this.props;
        let itemCssClass = "task-element task-element-action";
        if (isDragging) {
            itemCssClass = "task-element task-element-action ".concat("dragged-item");
        }
        return connectDragSource(
            <div>
                <ReactCSSTransitionGroup transitionName="task-element"
                                         transitionAppear={true} transitionEnterTimeout={0} transitionAppearTimeout={0}
                                         transitionLeaveTimeout={0}>

                    <div className={itemCssClass}>
                        <div className="taskItemHeader">
                            {value}
                        </div>
                        <div className = "taskItemText">
                            {desc}
                        </div>
                    </div>

                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default DragSource(constants.Task, TaskItemSpec, collect)(TaskItem);
