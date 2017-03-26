import React, {Component} from 'react';
import TaskTypeFilterActions from './../../../actions/FilterTasksTypesActionCreator'

export default class FilterElement extends Component {

  constructor(props){
    super(props);
  }

  render (){
    let name = this.props.name;
    let isActive = this.props.active;
    return (
          <button   className = {isActive? 'waves-effect waves-light btn-flat filter-button-active  filter-button' : 'waves-effect btn-flat filter-button'} onClick = {(e)=> TaskTypeFilterActions.filterChange(e, name)}> {name}</button>
    )
  }
}
