import React from 'react';
import "./App.css";
import { connect } from 'react-redux';
import { deleteItinerary } from '../redux/actions'
import {
  Link
} from "react-router-dom";

export class Snippet extends React.Component {
    render() {
      return (  
        
        <div className="item-snippet">
          <h3>{this.props.title}</h3>
          <h3>{this.props.date_leave}<span className="ital">to</span> {this.props.date_return}</h3>
          <h3>Last Updated: {this.props.timestamp}</h3>
          <br/> 
          <Link to={{
            pathname: `/view/${this.props.index}`,
            state: { index: this.props.index }
          }}>
          <i class="fas fa-edit" alt="Edit"><span className="bree-font"> View/Edit</span></i></Link>
       <i onClick={() => this.props.deleteItinerary(this.props.id)} class="fas fa-trash" alt="Delete"><span className="bree-font"> Delete</span></i>
        </div>
      )
    }
  }


  const mapDispatchToProps =  {
    deleteItinerary
  }

  
  export default connect(null, mapDispatchToProps)(Snippet)
  