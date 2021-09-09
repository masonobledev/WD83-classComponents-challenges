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
      items: [],
    };
    // this.searchFunction = this.bind(this);
  }
  
  searchFunction=(e) => {
    
    const term = e.target.value
    const results = this.state.things.filter ((thing) => thing.includes(term))
    this.setState({ items: results });
  } 
  
  filterArray = () => {
    // if(this.state.items)
  }
   
   render() {
     return (
       <div>
         <Input 
            onChange = {(e) => this.searchFunction(e)}
            placeholder='Search Here'
            />
         <h3>Results: {this.state.items.join(", ")}</h3>
       </div>
     );
  }
 }


 

 
export default SearchIndex;