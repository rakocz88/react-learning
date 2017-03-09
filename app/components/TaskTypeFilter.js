import React, {Component} from 'react';
import FilterElement from './FilterElement.js';

export default class TaskTypeFilter extends Component{

  constructor(props){
    super(props);
    this.state = {filters :  []};
    this.changeFilterValue = this.changeFilterValue.bind(this);
  }

  changeFilterValue(type){
      console.log("It is here");
      let foundElement = this.state.filters.filter(element => element.type === type);
      foundElement.active = !foundElement.active;

  }


  render (){
    let allFilters = this.props.types;
    return (
      <span>
      { allFilters.map( filter => <FilterElement key = {filter.id} name = {filter.type} active = {filter.active} onChangeFilter = {this.changeFilterValue} />) }
      </span>
    )
  }
}
