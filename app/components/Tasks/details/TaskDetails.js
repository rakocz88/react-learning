import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';
import update from 'react-addons-update'
import TaskDetailsStore from './../../../stores/TaskDetailsStore';
import TypeStore from './../../../stores/TypeStore';
import TaskActionCreator from './../../../actions/TaskActionCreator';
import TaskItemValidation from './../validation/TaskItemValidation'

class TaskDetails extends Component {

    constructor() {
        super();
        this.saveChanges = this.saveChanges.bind(this);
        this.state = {name : '', desc : '', type : ''};
    }

    componentDidMount(){
        this.setState(TaskDetailsStore.getState());
    }

    changeField(event, field){
        let newState = update(this.state , {[field] : {$set : event.target.value}});
        this.setState(newState);
    }

    saveChanges(){
        if (TaskItemValidation.validateTaskDetails(this.state)){
            TaskActionCreator.updateTask(this.state)
            hashHistory.push("/board");
            Materialize.toast('Poprawnie aktualizowano  zadanie', 6000, 'blue')
        }
        else {
            Materialize.toast('Validation failed!', 6000, 'red');
        }

    }

    render() {
        let {name, desc, type} = this.state;
        let types = TypeStore.getState();
        return (
            <div className="form">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="taskName validate" type="text" value={name} onChange={(event => this.changeField(event, 'name'))}/>
                        <label htmlFor="taskName" className = "active">Task name </label>
                    </div>
                    <div className="col s6 input-field">
                        <select className="popup-select" value={type} onChange={(e) => this.changeField(e, 'type')}>
                            <option value="" disabled selected>Choose your option</option>
                            {types.map(type => <option key={type.id} value={type.type}>{type.type}</option>)}
                        </select>
                         <label className="active">Task type</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="tascDesc" className="materialize-textarea" value={desc} onChange = {event => this.changeField(event, 'desc')}>

                        </textarea>
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