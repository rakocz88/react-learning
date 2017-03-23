/**
 * Created by filip on 12.03.2017.
 */
import React, {Component} from 'react';
import {Button} from 'elemental';
import AddTaskModal from './AddTaskModal.js';

export default class AddTaskButton extends Component {

    constructor() {
        super();
        this.state = {"showModal": false};
        this.showAddTaskModal = this.showAddTaskModal.bind(this);
    }

    showAddTaskModal() {
        this.setState({"showModal": !this.state.showModal});
    }


    render() {
        return (
            <div>
                <button className="waves-effect waves-light btn" onClick={this.showAddTaskModal}>Add Task</button>
                <AddTaskModal isOpen={this.state.showModal} callbacks={{toogleModal : this.showAddTaskModal}}
                              types={this.props.types}/>
            </div>
        );
    }
}
