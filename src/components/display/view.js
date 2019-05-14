import React from "react";
import "../App.css";
import { BrowserRouter as Link } from "react-router-dom";
import Nav from "../nav";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchPackList, deletePackList } from "../../redux/actions";


export class ViewPackListPage extends React.Component {
 // componentDidMount() {
  //   console.log(this.props, '%%');
  //   const id = this.props.packList[this.props.match.params.id]._id;
  //   this.props.dispatch(fetchPackList(id));
  //   console.log(id, this.props.packList[this.props.match.params.id]._id)
  // }
  render() {
   
    const index = this.props.match.params.id;
    const list = this.props.packList[index];
    const id = this.props.packList[this.props.match.params.id]._id;
     console.log('$$', id);
     console.log('$$', list._id);
    let datesFormatted = {};
    let dateObj = {date_leave: list.date_leave, date_return: list.date_return, timestamp: list.timestamp};
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

    const listItems = list.list.map((item, index) => (
        <li key={index} className="view-list">{index +1}. {item}</li>
          ))

    return (
      <div className="item-view">
        <div className="nav">
          <Nav />
        </div>
       <h3 className="itin-title">{list.title}</h3>
          <h3>{datesFormatted.date_leave}<span className="ital">to</span> 
          {datesFormatted.date_return}</h3>
          <ul>
          {listItems}
          </ul>
          <h4>Last Updated: {datesFormatted.timestamp}</h4>
          <br/> 
       <i onClick={() => this.props.deletePackList(list._id)} className="fas fa-trash" alt="Delete"><span className="bree-font"> Delete</span></i>
       <Link to="/dashboard">Return to dashboard</Link>
      </div>
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    packList: state.packApp.packLists
  };
};

const mapDispatchToProps = {
  fetchPackList,
  deletePackList
};

export default requiresLogin()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewPackListPage)
);
