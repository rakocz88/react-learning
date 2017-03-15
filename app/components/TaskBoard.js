import React, {Component, PropTypes} from 'react' ;
import TaskColumn from './TaskColumn.js';



export default class TaskBoard extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        console.log("RENDER TASK BOARD");
        return (
            <div>
                <div className="row">

                    <TaskColumn tasks={this.props.tasks} columnType='new'
                                taskCallbacks={this.props.taskCallbacks}> </TaskColumn>
                    <TaskColumn tasks={this.props.tasks} columnType='inProgress'
                                taskCallbacks={this.props.taskCallbacks}> </TaskColumn>
                    <TaskColumn tasks={this.props.tasks} columnType='done'
                                taskCallbacks={this.props.taskCallbacks}> </TaskColumn>
                </div>
            </div>
        )
            ;
    }
}

TaskBoard.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}
