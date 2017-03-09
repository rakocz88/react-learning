import React, {Component} from 'react';

export default class TaskItem extends Component {


  render (){

    let value  = this.props.value;
    
    return (
      <div className = "taskItem">
        <li>  {value} </li>
      </div>
    )
  }
}
