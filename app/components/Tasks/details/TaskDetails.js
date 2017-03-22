import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';
import update from 'react-addons-update'

class TaskDetails extends Component {


    constructor() {
        super();
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onTaskNameChange = this.onTaskNameChange.bind(this);
        this.state = {types: [], task: {}}
        this.onDescChange = this.onDescChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);

    }

    componentDidMount() {

        let taskList = this.props.tasks;
        let index = taskList.findIndex(task => task.id = this.props.params.id);
        let task = {task: taskList[index]};

        this.setState(task);

        fetch('./data/taskTypes.json')
            .then(response => response.json())
            .then(data => this.setState({"types": data.types}));
    }

    onTaskNameChange(event) {
        let value = event.target.value;
        let newState = update(this.state , {task : {name :{$set : value}}});
        this.setState(newState);
    }

    onTypeChange(event) {
        let value = event.target.value;
        let newState = update(this.state, {task : {type : {$set : value}}});
        this.setState(newState);
    }

    onDescChange(event) {
        let value = event.target.value;
        let newState = update(this.state, {task : {desc : {$set : value}}});
        this.setState(newState);
    }

    saveChanges(){
        this.props.callbacks.changeTask(this.state.task);
        hashHistory.push("/board");

    }



    render() {

        let {task, types} = this.state;
        return (
            <div className="form">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="taskName validate" type="text" value={task.name} onChange={this.onTaskNameChange}/>
                        <label htmlFor="taskName" className = "active">Task name </label>
                    </div>
                    <div className="col s6 input-field">
                        <select className="popup-select" value={task.type} onChange={this.onTypeChange}>
                            <option value="" disabled selected>Choose your option</option>
                            {types.map(type => <option key={type.id} value={type.type}>{type.type}</option>)}
                        </select>
                         <label className="active">Task type</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="tascDesc" className="materialize-textarea" value={task.desc} onChange = {this.onDescChange}></textarea>
                        <label htmlFor="tascDesc" className = "active">Description </label>
                    </div>
                </div>
                <div className="row">
                    <div className="button-group">
                        <button onClick={this.saveChanges} className = "btn waves-effect waves-light">Save</button>
                        <Link to = "/board" className = "btn waves-effect waves-light red">Cancel </Link>
                    </div>
                </div>


            </div>

        )
    }
}

export default TaskDetails