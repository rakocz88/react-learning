import React, {Component} from 'react';
import AddTaskButton from './AddTaskButton.js';


export default class TaskActionsDiv extends Component {



    constructor (){
        super();
       
    }


    render(){
        return(
            <div>
               <AddTaskButton />
            </div>
        );
    }
}