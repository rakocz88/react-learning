/**
 * Created by filip on 12.03.2017.
 */
import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'elemental';
import TaskActionCreator from './../../../actions/TaskActionCreator'
import TaskItemValidation from './../validation/TaskItemValidation'

export default class AddTaskModal extends Component {

    constructor() {
        super();
        this.state = {formFields: {id: "", name: "", desc: "", status: "new", type: ""}};
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.validateBeforeSubmit = this.validateBeforeSubmit.bind(this);
    }


    handleChange(event, field) {
        this.state.formFields[field] = event.target.value;
    }

    validateBeforeSubmit() {
        let result = false;
        if (this.state.formFields.name != undefined && this.state.formFields.name != "") {
            result = true;
        }
        return result;
    }

    submitForm() {
        if (TaskItemValidation.validateTaskDetails( this.state.formFields)) {
            this.props.callbacks.toogleModal();
            let newTask = this.state.formFields;
            newTask.id = Date.now();
            newTask.status = "new";
            TaskActionCreator.addTask(newTask)
            this.setState({formFields: {id: "", name: "", desc: ""}});
            Materialize.toast('Poprawnie dodano zadanie', 6000, 'blue')
        }
        else {
            Materialize.toast('Formularz zawiera bledy', 6000, 'red')
        }
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
                        <input id="taskName" type="text" className="validate" value={this.state.name}
                               onChange={(event)=>this.handleChange(event, 'name')}/>
                        <label htmlFor="taskName">name</label>
                    </div>

                    <div className="input-field col s12">

                        <select className="popup-select" onChange={(event)=>this.handleChange(event, 'type')}
                                value={this.state.type}>
                            <option value=""></option>
                            {types.map(type => <option key={type.id} value={type.type}>{type.type}</option>)}
                        </select>
                        <label> Task type</label>
                    </div>

                    <div className="input-field col s6">
                        <input id="taskDescription" type="text" className="validate" value={this.state.desc}
                               onChange={(event)=>this.handleChange(event, 'desc')}/>
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
