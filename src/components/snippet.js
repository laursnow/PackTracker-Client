import React from 'react';
import "./App.css";
import { connect } from 'react-redux';
import { deleteItinerary } from '../redux/actions'
import {
  Link
} from "react-router-dom";

export class Snippet extends React.Component {
  
    render() {
      let datesFormatted = {};

      let dateObj = {date_leave: this.props.date_leave, date_return: this.props.date_return, timestamp: this.props.timestamp};
      function makeDates (dates) {
        const makeDatesObj = {};
        Object.keys(dates).forEach(function (key) {
          let value = dates[key];
          makeDatesObj[key] = new Date(value);
        });
        formatDates(makeDatesObj);
      }
      
      function formatDates (dates) {
        const formatDatesObj = {};
        Object.keys(dates).forEach(function (key) {
          let value = dates[key];
          formatDatesObj[key] = value.toGMTString();
        });
        sliceDates(formatDatesObj);
      }

      function sliceDates(dates) {
        Object.keys(dates).forEach(function (key) {
          let value = dates[key];
          datesFormatted[key] = value.slice(0, 16);
      })
    }
      makeDates(dateObj);
      return (  
        
        <div className="item-snippet">
          <h3 className="itin-title">{this.props.title}</h3>
          <h3>{datesFormatted.date_leave}<span className="ital">to</span> {datesFormatted.date_return}</h3>
          <h4>Last Updated: {datesFormatted.timestamp}</h4>
          <br/> 
          <Link to={{
            pathname: `/view/${this.props.index}`,
            state: { index: this.props.index }
          }}>
          <i className="fas fa-edit" alt="Edit"><span className="bree-font"> View/Edit</span></i></Link>
       <i onClick={() => this.props.deleteItinerary(this.props.id)} className="fas fa-trash" alt="Delete"><span className="bree-font"> Delete</span></i>
        </div>
      )
    }
  }


  const mapDispatchToProps =  {
    deleteItinerary
  }

  
  export default connect(null, mapDispatchToProps)(Snippet)
  