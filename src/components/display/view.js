import React from "react";
import { connect } from "react-redux";
import {
  deletePackList,
  editPackList,
  fetchPackList,
  strikeout,
  remove,
  add
} from "../../redux/actions";
import { Link } from "react-router-dom";
import "../App.css";
import requiresLogin from "../requires-login";
import Nav from "../nav";
import Loader from "../loader";
import ErrorComponent from "../error";
import ListItem from "./listitem";
import AddListItemForm from "../forms/add-listitemform";

// Renders component for view/interacting with existing lists further

export class ViewPackListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSuccess: false };
  }

  onSuccess = () => {
    this.setState(() => ({
      isSuccess: true
    }));
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchPackList(id));
  }

  render() {
    if (this.props.status === "loading" || this.props.updateData === null) {
      return <Loader />;
    }

    if (
      this.props.status === "error" ||
      this.props.statusAuth === "error" ||
      this.props.status == null
    ) {
      return <ErrorComponent />;
    } else {
      const { id } = this.props.match.params;
      const list = this.props.updateData;
      let datesFormatted = {}; // Date formatting functions below
      let dateObj = {
        date_leave: list.date_leave,
        date_return: list.date_return,
        timestamp: list.timestamp
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
      makeDates(dateObj);

      const packListItems = this.props.updateData.pack.map(
        (packListItem, index) => (
          <ul className="container-list-items" key={index}>
            <ListItem index={index} {...packListItem} />
          </ul>
        )
      );
      const styleButton = {
        fontSize: "22px",
        textAlign: "center",
        padding: "0px",
        margin: "0px",
        height: "40px",
        width: "250px"
      };

      return (
        <div className="item-view">
          <div className="nav">
            <Nav />
          </div>
          <h3 className="packlist-title">{list.title}</h3>
          <h3 className="packlist-date">
            {datesFormatted.date_leave}
            <span className="ital">to</span>
            {datesFormatted.date_return}
          </h3>
          <h4>Last Updated: {datesFormatted.timestamp}</h4>
          {this.state.isSuccess && this.props.status === "success" && (
            <h3 aria-live="polite">List successfully saved.</h3>
          )}
          <br />
          <button
            type="submit"
            onClick={() => {
              this.props.editPackList(this.props.updateData, id);
              this.onSuccess();
            }}
            style={styleButton}
          >
            Save Packing List
          </button>
          <div className="pack-list-items">{packListItems}</div>
          <AddListItemForm />
          <br /> <br />
          <Link to="/dashboard">
            <i className="fas fa-home" style={{ paddingBottom: "18px" }}>
              <span className="bree-font">Return to dashboard</span>
            </i>
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  updateData: state.packApp.currentData,
  status: state.packApp.status,
  statusAuth: state.auth.status
});

const mapDispatchToProps = {
  fetchPackList,
  deletePackList,
  editPackList,
  strikeout,
  remove,
  add
};

export default requiresLogin()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewPackListPage)
);
