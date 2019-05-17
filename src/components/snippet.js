import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { deletePackList } from "../redux/actions";
import { Link } from "react-router-dom";
import Loader from "./loader";
import ErrorComponent from "./error";

// Renders child components on dashboard

export class Snippet extends React.Component {
  render() {
    if (
      this.props.status === "loading" ||
      this.props.statusAuth === true ||
      this.props.date_leave === null ||
      this.props.status === ""
    ) {
      return <Loader />;
    }

    if (this.props.status === "error" || this.props.statusAuth === "error") {
      return <ErrorComponent />;
    } else {
      // The following code I wrote to convert timestamps to formatted dates for display
      let datesFormatted = {};
      let dateObj = {
        date_leave: this.props.snippets[this.props.index].date_leave,
        date_return: this.props.snippets[this.props.index].date_return,
        timestamp: this.props.snippets[this.props.index].timestamp
      };
      function makeDates(dates) {
        const makeDatesObj = {};
        Object.keys(dates).forEach(function(key) {
          let value = dates[key];
          makeDatesObj[key] = new Date(value);
        });
        formatDates(makeDatesObj);
      }

      function formatDates(dates) {
        const formatDatesObj = {};
        Object.keys(dates).forEach(function(key) {
          let value = dates[key];
          formatDatesObj[key] = value.toGMTString();
        });
        sliceDates(formatDatesObj);
      }

      function sliceDates(dates) {
        Object.keys(dates).forEach(function(key) {
          let value = dates[key];
          datesFormatted[key] = value.slice(0, 16);
        });
      }
      makeDates(dateObj); // Sending dates to be formatted

      return (
        <div className="item-snippet">
          <h3 className="packlist-title">{this.props.title}</h3>
          <h3 className="packlist-date">
            {datesFormatted.date_leave}
            <span className="ital">to</span> {datesFormatted.date_return}
          </h3>
          <h4>Last Updated: {datesFormatted.timestamp}</h4>
          <br />
          <Link
            to={{
              pathname: `/view/${this.props.snippets[this.props.index]._id}`, // The URL is the unique mongoID so the server can be accessed easily
              state: { index: this.props.index }
            }}
          >
            <i className="fas fa-edit big" alt="Edit">
              <span className="bree-font"> View/Edit</span>
            </i>
          </Link>
          
          <i
            onClick={() => this.props.deletePackList(this.props._id)}
            className="fas fa-trash big"
            alt="Delete"
          >
            <span className="bree-font"> Delete</span>
          </i>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  status: state.packApp.status,
  statusAuth: state.auth.status,
  snippets: state.packApp.packLists
});

const mapDispatchToProps = {
  deletePackList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Snippet);
