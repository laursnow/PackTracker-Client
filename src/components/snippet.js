import React from 'react';
import "./App.css";

class Snippet extends React.Component {
    render() {
      return (  
        <div className="item-snippet">
        <h3>Itineraries</h3>
        <p>snippets blah blah></p>
          {/* <h3>{stateProps.title}</h3> */}
          {/* <h3>{this.date_leave}<span className="ital">to</span> {this.date_return}</h3>
          <h3>Last Updated: {this.timestamp}</h3>
          <br/> */}
          {/* <i onClick={() => this.props.dispatchAction("EDIT")} class="fas fa-edit"></i>Edit   */}
          {/* <i onClick={() => this.props.dispatchAction("TRASH")} class="fas fa-trash"></i>  Delete
          <br />
          <i onClick={() => this.props.dispatchAction("PLUS")} class="fas fa-plus"></i> Add New */}
        </div>
      )
    }
  }
  export default Snippet;
  