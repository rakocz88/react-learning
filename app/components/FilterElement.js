import React, {Component} from 'react';
import { Button } from 'elemental'


export default class FilterElement extends Component {

  constructor(props){
    super(props);
    this.onFilterClicked= this.onFilterClicked.bind(this);
  }

  onFilterClicked(event){

    this.props.taskCallbacks.changeFilter(this.props.name);
  }

 

  render (){
    let name = this.props.name;
    let isActive = this.props.active;
    return (
          <Button  className= "filter-button" type = {isActive? 'primary' : 'hollow-primary'} onClick = {this.onFilterClicked}> {name}</Button>
    )
  }
}
