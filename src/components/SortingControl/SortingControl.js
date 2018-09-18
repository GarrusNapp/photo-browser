import React, { Component } from "react";
import { connect } from "react-redux";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { sortCategory } from "../../redux/actions/categoryActions";

const MenuItems = [
  <React.Fragment>
    Likes <span className="glyphicon glyphicon-arrow-up" />
  </React.Fragment>,
  <React.Fragment>
    Likes <span className="glyphicon glyphicon-arrow-down" />
  </React.Fragment>,
  <React.Fragment>
    Creation date <span className="glyphicon glyphicon-arrow-up" />
  </React.Fragment>,
  <React.Fragment>
    Creation date <span className="glyphicon glyphicon-arrow-down" />
  </React.Fragment>
];

class SortingControl extends Component {
  handleSelect = (eventKey, event) => {
    const sortType = ["likes_dsc", "likes_asc", "date_dsc", "date_asc"];
    if (this.props.show)
      this.props.sortCategory(this.props.show, sortType[eventKey]);
  };
  render() {
    return (
      <div className="pull-right">
        <DropdownButton
          bsStyle="default"
          title="Sort"
          id="dropdown"
          onSelect={this.handleSelect}
        >
          {MenuItems.map((el, i) => {
            return (
              <MenuItem eventKey={i} key={i}>
                {el}
              </MenuItem>
            );
          })}
        </DropdownButton>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    show: state.show
  };
};
export default connect(mapStateToProps, { sortCategory })(SortingControl);
