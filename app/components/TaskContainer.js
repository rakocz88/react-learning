import React, {Component} from 'react';
import 'whatwg-fetch';
import TaskBoard from './TaskBoard.js';
import TaskTypeFilter from './TaskTypeFilter.js';
import update from 'react-addons-update';
import TaskActionsDiv from './Tasks/actionDiv/TaskActionsDiv';


export default class TaskContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [], types: []};
        this.filterActiveTasks = this.filterActiveTasks.bind(this);
        this.changeFilterValue = this.changeFilterValue.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
    }
    addNewTask(){
    }

    filterActiveTasks(elem) {
        let result = this.state.types.map(type1 => type1).filter(type => type.type === elem).filter(filteredType => filteredType.active).length > 0;
        return result
    }

    changeFilterValue(inputType){

        this.setState({filters :  this.props.types});
        let index = this.state.types.findIndex((taskType => taskType.type === inputType));
        var changedBool;

        let changedFilterElems = update(this.state.types ,
            {[index] :
                {active :
                    {$set : !this.state.types[index].active}
                }
            }
        );

        this.setState({types :  changedFilterElems});
    }

    componentDidMount() {
        fetch('./data/tasks.json')
            .then(response => response.json())
            .then(data => this.setState({"tasks": data.tasks}))
        fetch('./data/taskTypes.json')
            .then(response => response.json())
            .then(data => this.setState({"types": data.types}))
    }

    render() {
        return (
            <div className="TaskContainer">
                <TaskTypeFilter types={this.state.types}  taskCallbacks  = { {changeFilter:this.changeFilterValue} }/>
                <TaskActionsDiv />
                <TaskBoard tasks={this.state.tasks} taskCallbacks={{filter:  this.filterActiveTasks}}/>


            </div>
        )
    }
}
