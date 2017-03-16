import React, {Component} from 'react';




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
          <button   className = {isActive? 'waves-effect waves-light btn-flat orange filter-button' : 'waves-effect btn-flat filter-button'} onClick = {this.onFilterClicked}> {name}</button>
    )
  }
}
