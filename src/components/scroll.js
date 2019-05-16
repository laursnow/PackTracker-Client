
import React from "react";
import smoothscroll from 'smoothscroll-polyfill';
import { withRouter } from "react-router-dom";

smoothscroll.polyfill();

// Controlling movement around the application on link selection

export class Scroll extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo({ top: 1000, left: 0, behavior: 'smooth' });
      }
    }
  
    render() {
      return this.props.children;
    }
  }
  
  export default withRouter(Scroll);