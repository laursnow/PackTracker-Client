import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { HashLink } from "react-router-hash-link";


export class About extends React.Component {
    render() {
      return (
        <div className="item-auth">
           <h2>Itinerator: Travel Better.</h2>
           <p>App info/screenshots</p>
              <HashLink to="/#top" className="up">Back to top</HashLink>
            </div> 

      );
    }
  }
    
  export default connect()(About);
  

  
