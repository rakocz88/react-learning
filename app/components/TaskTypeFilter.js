import React, {Component} from 'react';
import FilterElement from './FilterElement.js';
import 'babel-polyfill';

export default class TaskTypeFilter extends Component{

  constructor(props){
    super(props);
  }



  render (){
    let allFilters = this.props.types;
    return (
      <div className="filter-buttons-container">
      { allFilters.map(filter => <FilterElement key={filter.id}
                                                name={filter.type}
                                                active={filter.active}
                                                taskCallbacks={this.props.taskCallbacks}/>
      )
      }
         </div>
    )
  }

}
