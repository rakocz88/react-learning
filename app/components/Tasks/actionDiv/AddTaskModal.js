/**
 * Created by filip on 12.03.2017.
 */
import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormField} from 'elemental';

export default class AddTaskModal extends Component {

    constructor(){
        super();
    }


    render(){
        let showModal = this.props.isOpen;
        return(
            <Modal isOpen={showModal} onCancel={this.props.callbacks.toogleModal} backdropClosesModal>
                <ModalHeader text="Lots of text to show scroll behavior" showCloseButton
                             onClose={this.props.callbacks.toogleModal}/>
                <ModalBody>
                        <Form type="horizontal">
                            <FormField ></FormField>
                        </Form>


                </ModalBody>
                <ModalFooter>
                    <Button type="primary" onClick={this.props.callbacks.toogleModal}>Close modal</Button>
                    <Button type="link-cancel" onClick={this.props.callbacks.toogleModal}>Also closes modal</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
