import React, {Component} from 'react';

export default class FilterElement extends Component {

  constructor(props){
    super(props);
    this.onFilterClicked= this.onFilterClicked.bind(this);
  }

  onFilterClicked(){
    this.props.onChangeFilter(this.props.name);
  }

  render (){

    let name = this.props.name;
    let isActive = this.props.active;
    return (
          <button className = {isActive? 'filterActive' : 'filterNotActive'} onClick = {this.onFilterClicked}> {name}</button>
    )
  }
}
