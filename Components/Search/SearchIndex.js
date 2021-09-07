import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor (props){
    super (props);
    this.state = {
      things: [
        'pen', 
        'marker', 
        'eraser', 
        'notebook', 
        'pencil', 
        'scissors', 
        'highlighter', 
        'stapler', 
        'paper clip', 
        'binder', 
        'hole punch', 
        'laminator', 
        'laminating sheets', 
        'protective sheets', 
        'index cards',
      ], 
      items: '',
    };
    // this.searchFunction = this.bind(this);
  }
  
  searchFunction=(e) => {
    this.setState({ items: e.target.value });
  } 
  
  filterArray = () => {
    // if(this.state.items)
  }
   
   render() {
     return (
       <div>
         <Input 
            onChange = {(e) => this.searchFunction()}
            placeholder='Search Here'
            value={this.state.items} />
         {/* <h3>Results: {this.state.things.filter.map}</h3> */}
       </div>
     );
  }
 }


 

 
export default SearchIndex;