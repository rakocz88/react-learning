import React, {Component} from 'react';
import AddTaskButton from './AddTaskButton.js';


export default class TaskActionsDiv extends Component {


    constructor (){
        super();
    }


    render(){
        return(
            <div className = "buttons-acions-div">
               <AddTaskButton  types={this.props.types} callbacks = {{addTask : this.props.callbacks.addTask}} />
            </div>
        );
    }
}