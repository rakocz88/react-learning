/**
 * Created by filip on 12.03.2017.
 */
import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'elemental';
import update from 'react-addons-update';

export default class AddTaskModal extends Component {

    constructor() {
        super();
        this.state = {formFields: {id: "", name: "", desc: "", status: "new", type: ""}};
        this.handleSelect = this.handleSelect.bind(this);
        this.onTaskNameChange = this.onTaskNameChange.bind(this);
        this.onTaskDescChange = this.onTaskDescChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.validateBeforeSubmit = this.validateBeforeSubmit.bind(this);
    }

    handleSelect(event) {
        let newVal = event.target.value;
        console.log("New val");
        console.log(newVal);
        let oldState = this.state;
        let newState = update(oldState, {formFields: {type: {$set: newVal}}});
        this.setState(newState);

    }

    validateBeforeSubmit() {
        let result = false;
        if (this.state.formFields.name != undefined && this.state.formFields.name != "") {
            result = true;
        }
        return result;
    }

    submitForm() {
        if (this.validateBeforeSubmit()) {
            this.props.callbacks.toogleModal();
            let newTask = this.state.formFields;
            newTask.id = Date.now();
            newTask.status = "new";
            this.props.callbacks.addTask(newTask);
            console.log("This state is");
            console.log(this.state);
            this.setState({formFields: {id: "", name: "", desc : ""}});
        }
    }

    onTaskNameChange(event) {

        let newVal = event.target.value;
        let oldState = this.state;
        let newState = update(oldState, {formFields: {name: {$set: newVal}}});
        this.setState(newState);
    }

    onTaskDescChange(event) {
        let newVal = event.target.value;
        let oldState = this.state;
        let newState = update(oldState, {formFields: {desc: {$set: newVal}}});
        this.setState(newState);
    }


    render() {
        let showModal = this.props.isOpen;
        let types = this.props.types;
        return (
            <Modal isOpen={showModal} onCancel={this.props.callbacks.toogleModal} backdropClosesModal>
                <ModalHeader text="Dodaj nowe zadanie" showCloseButton
                             onClose={this.props.callbacks.toogleModal}/>
                <ModalBody>

                    <div className="input-field col s6">
                        <input id="taskName" type="text" className="validate" value={this.state.formFields.name}
                               onChange={this.onTaskNameChange}/>
                        <label htmlFor="taskName">name</label>
                    </div>

                    <div className="input-field col s12">

                        <select className="popup-select" onChange={this.handleSelect} value="">
                            <option value=""></option>
                            {types.map(type => <option key={type.id} value={type.type}>{type.type}</option>)}
                        </select>
                        <label> Task type</label>
                    </div>

                    <div className="input-field col s6">
                        <input id="taskDescription" type="text" className="validate" value={this.state.formFields.desc}
                               onChange={this.onTaskDescChange}/>
                        <label htmlFor="taskDescription">Desc</label>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button type="primary" onClick={this.submitForm}>Add Task</Button>
                    <Button type="link-cancel" onClick={this.props.callbacks.toogleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
