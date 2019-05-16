import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { strikeout, remove } from "../../redux/actions";

// Renders existing child component list items for user interaction

export class ListItem extends React.Component {
  render() {
    return (
      <li
        key={this.props.index}
        className="view-list"
        style={{
          textDecoration: this.props.complete ? "line-through" : "none"
        }}
      >
        <i
          onClick={() => this.props.remove(this.props.index)}
          className="fas fa-trash big"
          alt="Delete"
        />
        <i
          onClick={() =>
            this.props.strikeout(this.props.complete, this.props.index)
          }
          className="fas fa-check big"
          alt="Check Off"
        />
        {this.props.pack_item}
      </li>
    );
  }
}

const mapDispatchToProps = {
  strikeout,
  remove
};

export default connect(
  null,
  mapDispatchToProps
)(ListItem);
