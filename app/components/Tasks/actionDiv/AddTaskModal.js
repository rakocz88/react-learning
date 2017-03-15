/**
 * Created by filip on 12.03.2017.
 */
import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'elemental';
import update from 'react-addons-update';

export default class AddTaskModal extends Component {

    constructor() {
        super();
        this.state = {formFields: {id: "", name: "", description: "", status: "new", type: ""}};
        this.handleSelect = this.handleSelect.bind(this);
        this.onTaskNameChange = this.onTaskNameChange.bind(this);
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
            this.setState({formFields: {id: "", name: "", taskDescription: ""}});
        }
    }

    onTaskNameChange(event) {

        let newVal = event.target.value;
        let oldState = this.state;
        let newState = update(oldState, {formFields: {name: {$set: newVal}}});
        this.setState(newState);
    }


    render() {
        let showModal = this.props.isOpen;
        let types = this.props.types;
        return (
            <Modal isOpen={showModal} onCancel={this.props.callbacks.toogleModal} backdropClosesModal>
                <ModalHeader text="Lots of text to show scroll behavior" showCloseButton
                             onClose={this.props.callbacks.toogleModal}/>
                <ModalBody>

                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" value={this.state.formFields.name}
                               onChange={this.onTaskNameChange} />
                        <label htmlFor="last_name">name</label>
                    </div>

                        <div className="input-field col s12">

                            <select className ="popup-select" onChange={this.handleSelect} value="">
                                <option value=""></option>
                                {types.map(type => <option key={type.id} value={type.type}>{type.type}</option>)}
                            </select>
                            <label> Task type</label>
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
