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
                <Button type="primary" onClick={this.showAddTaskModal}>Add Task</Button>
               <AddTaskModal isOpen = {this.state.showModal} callbacks = {{toogleModal : this.showAddTaskModal}} />
            </div>
        );
    }
}
