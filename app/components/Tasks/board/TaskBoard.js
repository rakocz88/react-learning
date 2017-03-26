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
                    <TaskColumn tasks={this.props.tasks} columnType='new' columnDesc='Nowe'> </TaskColumn>
                    <TaskColumn tasks={this.props.tasks} columnType='inProgress' columnDesc='Robie'> </TaskColumn>
                    <TaskColumn tasks={this.props.tasks} columnType='done' columnDesc='Zrobione'> </TaskColumn>
                </div>
            </div>
        )
    }
}

TaskBoard.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}
