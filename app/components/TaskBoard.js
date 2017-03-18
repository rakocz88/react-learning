import React, {Component, PropTypes} from 'react' ;
import TaskColumn from './TaskColumn.js';



export default class TaskBoard extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="task-board">
                <div className="row">

                    <TaskColumn tasks={this.props.tasks} columnType='new' columnDesc = 'Nowe'
                                taskCallbacks={this.props.taskCallbacks}> </TaskColumn>
                    <TaskColumn tasks={this.props.tasks} columnType='inProgress' columnDesc = 'Robie'
                                taskCallbacks={this.props.taskCallbacks}> </TaskColumn>
                    <TaskColumn tasks={this.props.tasks} columnType='done' columnDesc = 'Zrobione'
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
