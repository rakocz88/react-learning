import React, {Component} from 'react';
import FilterElement from './FilterElement.js';
import TaskTypeFilterStore from './../../../stores/TaskTypeFilterStore';
import FilterTasksTypesActionCreator from './../../../actions/FilterTasksTypesActionCreator'
import 'babel-polyfill';

export default class TaskTypeFilter extends Component{

  constructor(props){
    super(props);
  }

    componentDidMount(){
        FilterTasksTypesActionCreator.getAllFilters();
    }



  render (){
    let allFilters = TaskTypeFilterStore.getState();
    return (
        <div className = "">
          <div className="filter-buttons-container">
          { allFilters.map(filter => <FilterElement key={filter.id}
                                                    name={filter.type}
                                                    active={filter.active}/>
          )
          }
             </div>
          </div>
    )
  }

}
