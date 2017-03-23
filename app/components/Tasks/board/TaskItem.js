import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {DragSource} from 'react-dnd';
import constants from './../../constants.js';
import {Link} from 'react-router';

let TaskItemSpec = {
    beginDrag(props, monitor, component){
        return {
            id: props.id
        };
    },
    endDrag(props, monitor, component){
        if (monitor.getDropResult() !== null) {
            let {status} =  monitor.getDropResult();
            let {id} = props;
            props.updateTaskStatus(id, status);
        }
    }
}

let collect = (connect, monitor)=> {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class TaskItem extends Component {

    constructor() {
        super();
        this.goToDetails = this.goToDetails.bind(this);
    }

    goToDetails() {
        this.props.history.pushState(null, "/board");
    }

    render() {
        let {value, desc, id} = this.props;
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
                    <div className="row">

                        <div className={itemCssClass}>
                            <div className="col s10">
                                <div className="taskItemHeader">
                                    {value}
                                </div>
                                <div className="taskItemText">
                                    {desc}
                                </div>
                            </div>
                            <div className="cols s2">
                                <Link to={'/task/details/'+id}><i className="Small material-icons">mode_edit</i></Link>
                            </div>
                        </div>

                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default DragSource(constants.Task, TaskItemSpec, collect)(TaskItem);
