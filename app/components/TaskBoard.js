import React, {Component, PropTypes} from 'react' ;
import TaskColumn from './TaskColumn.js';
import {Row} from 'elemental';


export default class TaskBoard extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Row>

                    <TaskColumn tasks={this.props.tasks} columnType='new'
                                taskCallbacks={this.props.taskCallbacks}> </TaskColumn>
                    <TaskColumn tasks={this.props.tasks} columnType='inProgress'
                                taskCallbacks={this.props.taskCallbacks}> </TaskColumn>
                    <TaskColumn tasks={this.props.tasks} columnType='done'
                                taskCallbacks={this.props.taskCallbacks}> </TaskColumn>
                </Row>
            </div>
        )
            ;
    }
}

TaskBoard.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}
