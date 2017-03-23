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

                    <TaskColumn tasks={this.props.tasks} columnType='new' columnDesc = 'Nowe' callbacks = {this.props.callbacks}> </TaskColumn>
                    <TaskColumn tasks={this.props.tasks} columnType='inProgress' columnDesc = 'Robie'
                                callbacks={this.props.callbacks}> </TaskColumn>
                    <TaskColumn tasks={this.props.tasks} columnType='done' columnDesc = 'Zrobione'
                                callbacks={this.props.callbacks}> </TaskColumn>
                </div>
            </div>
        )
            ;
    }
}

TaskBoard.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}
